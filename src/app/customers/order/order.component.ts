import {
  AsyncPipe,
  CurrencyPipe,
  NgFor,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import {
  NbAccordionModule,
  NbActionsModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbSpinnerModule,
  NbTooltipModule,
} from '@nebular/theme';
import { cloneDeep } from 'lodash';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { finalize, map, switchMap, tap } from 'rxjs/operators';
import { Accessory, AccessoryStatus } from '../../@core/data/accessory';
import { Device, DeviceStatus } from '../../@core/data/device';
import { Entity } from '../../@core/data/entity';
import { Order } from '../../@core/data/order';
import { Service } from '../../@core/data/service';
import { Utility } from '../../@core/data/utility';
import { FilterByQuantityPipe, XorPipe } from '../../@core/pipes';
import { CoreService } from '../../@core/services/core.service';
import { Process } from '../../@core/data/process';
import { ProcessStatusType } from '../../@core/data/customer';

enum ProductType {
  Device,
  Accessories,
  Utilities,
  Services,
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  imports: [
    AsyncPipe,
    CurrencyPipe,
    NbIconModule,
    NbActionsModule,
    NbSpinnerModule,
    NbCardModule,
    NgTemplateOutlet,
    NbListModule,
    NbAccordionModule,
    NgIf,
    NgFor,
    XorPipe,
    FilterByQuantityPipe,
    NbTooltipModule,
  ],
})
export class OrderComponent implements OnInit {
  coreService = inject(CoreService);

  destroyRef = inject(DestroyRef);

  activatedRoute = inject(ActivatedRoute);

  nbAuthService = inject(NbAuthService);

  router = inject(Router);

  devices$ = this.coreService.state$.pipe(
    map(({ Device }) =>
      Object.values(Device.entities).filter(
        (device) => device.status === DeviceStatus.Free,
      ),
    ),
  );

  devicesLoading$ = this.coreService.state$.pipe(
    map(({ Device }) => Device.loading),
  );

  devicesAdded$ = new BehaviorSubject<Device[]>([]);

  accessories$ = this.coreService.state$.pipe(
    map(({ Accessory }) =>
      Object.values(Accessory.entities).filter(
        (device) => device.status === AccessoryStatus.Free,
      ),
    ),
  );

  accessoriesLoading$ = this.coreService.state$.pipe(
    map(({ Accessory }) => Accessory.loading),
  );

  accessoriesAdded$ = new BehaviorSubject<Accessory[]>([]);

  utilities$ = this.coreService.state$.pipe(
    map(({ Utility }) =>
      Object.values(Utility.entities).filter((utility) => utility.quantity > 0),
    ),
  );

  utilitiesLoading$ = this.coreService.state$.pipe(
    map(({ Utility }) => Utility.loading),
  );

  utilitiesAdded$ = new BehaviorSubject<Utility[]>([]);

  services$ = this.coreService.state$.pipe(
    map(({ Service }) => Object.values(Service.entities)),
  );

  servicesLoading$ = this.coreService.state$.pipe(
    map(({ Service }) => Service.loading),
  );

  servicesAdded$ = new BehaviorSubject<Service[]>([]);

  orderLoading$ = this.coreService.state$.pipe(
    map(({ Order }) => Order.loading),
  );

  processId$ = new BehaviorSubject<number>(0);

  readonly productTypeTpl = ProductType;

  total$ = combineLatest([
    this.devicesAdded$,
    this.accessoriesAdded$,
    this.utilitiesAdded$,
    this.servicesAdded$,
  ]).pipe(
    map(([devicesAdded, accessoriesAdded, utilitiesAdded, servicesAdded]) => {
      const totalDevices = devicesAdded.reduce((a, b) => (a += b.price), 0);
      const totalAccessories = accessoriesAdded.reduce(
        (a, b) => (a += b.price),
        0,
      );
      const totalUtilities = utilitiesAdded.reduce(
        (a, b) => (a += b.price * b.quantity),
        0,
      );
      const totalServices = servicesAdded.reduce((a, b) => (a += b.price), 0);

      return totalDevices + totalAccessories + totalUtilities + totalServices;
    }),
  );

  ngOnInit(): void {
    this.getDevice();
    this.getAccessory();
    this.getUtility();
    this.getService();

    this.activatedRoute.params
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(({ processId }) => {
          this.processId$.next(parseFloat(processId));
        }),
      )
      .subscribe();

    this.coreService.subheaderInformation.set({
      value: 0,
      title: Entity.Order,
    });
  }

  addCart(
    item: Device | Accessory | Service | Utility,
    productType: ProductType,
  ): void {
    switch (productType) {
      case ProductType.Device:
        const devicesAdded = this.devicesAdded$.getValue();
        this.devicesAdded$.next([...devicesAdded, item as Device]);
        break;

      case ProductType.Accessories:
        const accessoriesAdded = this.accessoriesAdded$.getValue();
        this.accessoriesAdded$.next([...accessoriesAdded, item as Accessory]);
        break;

      case ProductType.Services:
        const servicesAdded = this.servicesAdded$.getValue();
        this.servicesAdded$.next([...servicesAdded, item as Service]);
        break;

      case ProductType.Utilities:
        const addedItem = cloneDeep<Utility>(item as Utility);
        const utilitiesAdded = this.utilitiesAdded$.getValue();
        const itemExists = utilitiesAdded.find(
          (utility) => utility.id === addedItem.id,
        );

        if (itemExists) {
          const map = utilitiesAdded.map((utility) => {
            if (utility.id === addedItem.id) {
              const newQuantity = utility.quantity + 1;
              return { ...utility, ...{ quantity: newQuantity } };
            }

            return utility;
          });

          this.utilitiesAdded$.next(map);
        } else {
          addedItem.quantity = 1;
          this.utilitiesAdded$.next([...utilitiesAdded, addedItem]);
        }

        break;
      default:
        break;
    }
  }

  removeFromCart(
    item: Device | Accessory | Service | Utility,
    productType: ProductType,
  ): void {
    switch (productType) {
      case ProductType.Device:
        const devicesAdded = this.devicesAdded$.getValue();
        this.devicesAdded$.next([
          ...devicesAdded.filter((device) => device.id !== item.id),
        ]);
        break;

      case ProductType.Accessories:
        const accessoriesAdded = this.accessoriesAdded$.getValue();
        this.accessoriesAdded$.next([
          ...accessoriesAdded.filter((accessory) => accessory.id !== item.id),
        ]);
        break;

      case ProductType.Services:
        const servicesAdded = this.servicesAdded$.getValue();
        this.servicesAdded$.next([
          ...servicesAdded.filter((service) => service.id !== item.id),
        ]);
        break;

      case ProductType.Utilities:
        const removedItem = cloneDeep<Utility>(item as Utility);
        const utilitiesAdded = this.utilitiesAdded$.getValue();
        const itemExists = utilitiesAdded.find(
          (utility) => utility.id === removedItem.id,
        );

        if (removedItem.quantity === 1) {
          this.utilitiesAdded$.next([
            ...utilitiesAdded.filter((utility) => utility.id !== item.id),
          ]);
        } else {
          const map = utilitiesAdded.map((utility) => {
            if (utility.id === removedItem.id) {
              const newQuantity = utility.quantity - 1;
              return { ...utility, ...{ quantity: newQuantity } };
            }

            return utility;
          });

          this.utilitiesAdded$.next(map);
        }

        break;
      default:
        break;
    }
  }

  payNow(total: number, emptyCart: boolean, reserve = false): void {
    if (emptyCart) {
      return;
    }
    this.coreService
      .post<Order>(
        {
          userId: 9,
          processId: this.processId$.getValue(),
          total,
          accessoryList: this.accessoriesAdded$.getValue().map((item) => ({
            id: item.id,
            status: reserve ? AccessoryStatus.Trial : AccessoryStatus.Sold,
          })),
          deviceList: this.devicesAdded$.getValue().map((item) => ({
            id: item.id,
            status: reserve ? DeviceStatus.Trial : DeviceStatus.Sold,
          })),
          serviceList: this.servicesAdded$.getValue().map((item) => ({
            id: item.id,
            price: item.price,
          })),
          utilitiesList: this.utilitiesAdded$.getValue().map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
        },
        Entity.Order,
      )
      .pipe(
        switchMap(() =>
          this.coreService
            .getById<Process>(Entity.Process, this.processId$.value)
            .pipe(
              switchMap((process) =>
                this.coreService.put(
                  {
                    ...process,
                    ...{
                      status: reserve
                        ? ProcessStatusType.trial
                        : ProcessStatusType.win,
                    },
                  },
                  Entity.Process,
                ),
              ),
            ),
        ),
        finalize(() => {
          this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  private getDevice() {
    this.coreService
      .get(Entity.Device)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  private getAccessory() {
    this.coreService
      .get(Entity.Accessory)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  private getUtility() {
    this.coreService
      .get(Entity.Utility)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  private getService() {
    this.coreService
      .get(Entity.Service)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
