import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Entity } from '../../@core/data/entity';
import { CoreService } from '../../@core/services/core.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap, map, tap, filter, finalize } from 'rxjs';
import { Order } from '../../@core/data/order';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbSpinnerModule,
  NbTooltipModule,
} from '@nebular/theme';
import {
  AsyncPipe,
  CurrencyPipe,
  JsonPipe,
  NgFor,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
import { Process } from '../../@core/data/process';
import { ProcessStatusType } from '../../@core/data/customer';
import { DeviceStatus } from '../../@core/data/device';
import { AccessoryStatus } from '../../@core/data/accessory';

enum ProductType {
  Device,
  Accessories,
  Utilities,
  Services,
}

@Component({
  selector: 'app-order-details',
  imports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbSpinnerModule,
    AsyncPipe,
    NbAccordionModule,
    NbListModule,
    NgIf,
    NgFor,
    NgTemplateOutlet,
    NbActionsModule,
    CurrencyPipe,
    NbTooltipModule,
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailsComponent implements OnInit {
  coreService = inject(CoreService);
  loadingOrder = signal(false);
  processStatus = signal<ProcessStatusType | null>(null);
  processStatusTypeTpl = ProcessStatusType;

  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  router = inject(Router);

  hasOrder = signal(false);

  orders$ = this.coreService.state$.pipe(
    map(({ Order }) => Object.values(Order.entities)[0]),
  );

  readonly productTypeTpl = ProductType;

  ngOnInit(): void {
    this.#checkIfHasOrder();
    this.coreService.subheaderInformation.set({
      value: 0,
      title: `View ${Entity.Order}`,
      showHome: true,
    });
  }

  goToPlaceAnOrder(): void {
    this.router.navigate(['../order'], {
      relativeTo: this.activatedRoute,
    });
  }

  payNow(order: Order, emptyCart: boolean): void {
    if (emptyCart) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ processId, customerId }) =>
          this.coreService
            .post<Order>(
              {
                ...order,
                deviceList: order.deviceList.map((device) => ({
                  ...device,
                  status: DeviceStatus.Sold,
                })),
                accessoryList: order.accessoryList.map((device) => ({
                  ...device,
                  status: AccessoryStatus.Sold,
                })),
              },
              Entity.Order,
            )
            .pipe(
              switchMap(() =>
                this.coreService
                  .getById<Process>(Entity.Process, processId)
                  .pipe(
                    switchMap((process) =>
                      this.coreService.put(
                        {
                          ...process,
                          ...{
                            status: ProcessStatusType.win,
                          },
                        },
                        Entity.Process,
                      ),
                    ),
                  ),
              ),
              finalize(() => {
                this.router.navigate(['../../'], {
                  relativeTo: this.activatedRoute,
                });
              }),
              takeUntilDestroyed(this.destroyRef),
            ),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  #checkIfHasOrder() {
    this.loadingOrder.set(true);
    this.activatedRoute.params
      .pipe(
        switchMap(({ processId }) =>
          this.coreService
            .get<Order[]>(Entity.Order, {
              processId,
            })
            .pipe(
              map((orders) => orders && orders.length > 0),
              tap((hasOrders) => {
                this.loadingOrder.set(false);
                this.hasOrder.set(hasOrders);
              }),
              filter(Boolean),
              switchMap(() =>
                this.coreService.getById<Process>(Entity.Process, processId),
              ),
              tap((process) => this.processStatus.set(process.status)),
              takeUntilDestroyed(this.destroyRef),
            ),
        ),
      )
      .subscribe();
  }
}
