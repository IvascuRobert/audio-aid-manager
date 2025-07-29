import {
  AfterViewInit,
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Entity } from '../../@core/data/entity';
import { CommentCellComponent } from '../../shared/components/custom-table-cell-render/comment-cell.component';
import { DateCellComponent } from '../../shared/components/custom-table-cell-render/date-cell.component';
import { ProcessStatusCellComponent } from '../../shared/components/custom-table-cell-render/process-status-cell.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { ProcessAddDialogComponent } from '../process-add-dialog/process-add-dialog.component';
import { CoreService } from '../../@core/services/core.service';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbSidebarService,
  NbSpinnerModule,
  NbUserModule,
} from '@nebular/theme';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap, map, tap, filter } from 'rxjs';
import { Order } from '../../@core/data/order';
import { Customer } from '../../@core/data/customer';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss'],
  standalone: true,
  imports: [
    TableComponent,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbIconModule,
    NbAccordionModule,
    NbActionsModule,
    NbButtonModule,
    JsonPipe,
    NbSpinnerModule,
  ],
})
export class ProcessDetailsComponent implements OnInit {
  coreService = inject(CoreService);
  entity = Entity.Process;

  selectedCustomer = computed(() => this.coreService.selectedCustomer());
  showCustomerDetails = computed(() => this.coreService.showCustomerDetails());

  firstLastName = computed(
    () =>
      `${this.coreService.selectedCustomer()?.firstName} ${this.coreService.selectedCustomer()?.lastName}`,
  );

  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);

  loadingCustomer = signal(false);

  settings: Record<string, any> = {
    selectMode: 'multi',
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '1%',
      },
      status: {
        title: 'Status',
        type: 'custom',
        renderComponent: ProcessStatusCellComponent,
      },
      leftEarValue: {
        title: 'Left ear value',
        type: 'number',
      },
      currentLeftEarDeviceName: {
        title: 'Current left ear device name',
        type: 'string',
      },
      leftEarDeviceDuration: {
        title: 'Left ear device duration',
        type: 'string',
      },
      rightEarValue: {
        title: 'Right ear value',
        type: 'number',
      },
      currentRightEarDeviceName: {
        title: 'Current right ear device name',
        type: 'string',
      },
      rightEarDeviceDuration: {
        title: 'Right ear device duration',
        type: 'string',
      },
      questionnaire: {
        title: 'Questionnaire',
        type: 'number',
      },
      reason: {
        title: 'Reason',
        type: 'custom',
        renderComponent: CommentCellComponent,
      },
      comment: {
        title: 'Comment',
        type: 'custom',
        renderComponent: CommentCellComponent,
      },
      createdAt: {
        title: 'Last status update',
        type: 'custom',
        renderComponent: DateCellComponent,
      },
    },
  };

  dialogTemplateRef = ProcessAddDialogComponent;

  ngOnInit(): void {
    if (!this.selectedCustomer()) {
      this.loadingCustomer.set(true);
      this.activatedRoute.params
        .pipe(
          switchMap((params) =>
            this.coreService
              .getById<Customer>(Entity.Customer, params['customerId'])
              .pipe(
                filter(Boolean),
                tap((customer) => {
                  this.loadingCustomer.set(false);
                  this.coreService.selectedCustomer.set(customer as Customer);
                }),
                takeUntilDestroyed(this.destroyRef),
              ),
          ),
        )
        .subscribe();
    }
  }

  closeCustomerDetails(): void {
    this.coreService.showCustomerDetails.set(false);
  }
}
