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
import { switchMap, map, tap, filter } from 'rxjs';
import { Order } from '../../@core/data/order';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-order-details',
  imports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbSpinnerModule,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailsComponent implements OnInit {
  coreService = inject(CoreService);
  loadingOrder = signal(false);

  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  router = inject(Router);

  hasOrder = signal(false);

  orders$ = this.coreService.state$.pipe(
    map(({ Order }) => Object.values(Order.entities)),
  );

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

  #checkIfHasOrder() {
    this.loadingOrder.set(true);
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.coreService
            .get<Order[]>(Entity.Order, {
              processId: params['processId'],
            })
            .pipe(
              map((orders) => orders && orders.length > 0),
              tap((hasOrders) => {
                this.loadingOrder.set(false);
                this.hasOrder.set(hasOrders);
              }),
              filter(Boolean),
              takeUntilDestroyed(this.destroyRef),
            ),
        ),
      )
      .subscribe();
  }
}
