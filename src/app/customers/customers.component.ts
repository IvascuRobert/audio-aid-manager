import { Component, inject, OnInit, signal } from '@angular/core';
import { Entity } from '../@core/data/entity';
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from '../@core/utils/save-local-storage';
import { AgeCellComponent } from '../shared/components/custom-table-cell-render/age-cell.component';
import { BoldTextCellComponent } from '../shared/components/custom-table-cell-render/bold-text-cell.component';
import { CommentCellComponent } from '../shared/components/custom-table-cell-render/comment-cell.component';
import { CustomerStatusCellComponent } from '../shared/components/custom-table-cell-render/customer-status-cell.component';
import { EmailCellComponent } from '../shared/components/custom-table-cell-render/email-cell.component';
import { GenderCellComponent } from '../shared/components/custom-table-cell-render/gender-cell.component';
import { PhoneCellComponent } from '../shared/components/custom-table-cell-render/phone-cell.component';
import { TableComponent } from '../shared/components/table/table.component';
import { CustomerAddDialogComponent } from './customer-add-dialog/customer-add-dialog.component';
import { PieChartWrapperComponent } from '../shared/components/pie-chart-wrapper/pie-chart-wrapper.component';
import { CoreService } from '../@core/services/core.service';
import { filter, finalize, map, Observable, tap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import groupBy from 'lodash-es/groupBy';
import { PieChartModel } from '../@core/data/pie-chart';
import { NbAlertModule, NbCardModule } from '@nebular/theme';
import {
  Customer,
  CustomerState,
  CustomerStatus,
} from '../@core/data/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  standalone: true,
  imports: [
    TableComponent,
    PieChartWrapperComponent,
    AsyncPipe,
    JsonPipe,
    NbCardModule,
    NbAlertModule,
  ],
})
export class CustomersComponent implements OnInit {
  coreService = inject(CoreService);

  readonly entity = Entity.Customer;

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
        renderComponent: CustomerStatusCellComponent,
      },
      firstName: {
        title: 'First Name',
        type: 'custom',
        renderComponent: BoldTextCellComponent,
      },
      lastName: {
        title: 'Last Name',
        type: 'custom',
        renderComponent: BoldTextCellComponent,
      },
      gender: {
        title: 'Gender',
        type: 'custom',
        renderComponent: GenderCellComponent,
      },
      dateOfBirth: {
        title: 'Age',
        type: 'custom',
        renderComponent: AgeCellComponent,
      },
      phoneNumber: {
        title: 'Telephone',
        type: 'custom',
        renderComponent: PhoneCellComponent,
      },
      email: {
        title: 'E-mail',
        type: 'custom',
        renderComponent: EmailCellComponent,
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      doctorId: {
        title: 'Doctor',
        type: 'string',
      },
      clinicId: {
        title: 'Clinic',
        type: 'string',
      },
      contactNote: {
        title: 'Contact Note',
        type: 'string',
      },
      taxCode: {
        title: 'Tax code',
        type: 'string',
      },
      comment: {
        title: 'Comment',
        type: 'custom',
        renderComponent: CommentCellComponent,
      },
    },
  };

  dialogTemplateRef = CustomerAddDialogComponent;

  warningMessage = signal('');

  showWarningMessage = signal(true);

  countWithNewStatus$ = this.coreService
    .getEntities$<CustomerState>(Entity.Customer)
    .pipe(
      filter((res) => !!this.entity && !!res?.entities),
      map(
        ({ entities }) =>
          Object.values(entities).filter(
            (res) => res.status === CustomerStatus.new,
          ).length,
      ),
    );

  ngOnInit(): void {
    this.warningMessage.set(this.#getRandomFriendlyCustomerWarning());
  }

  #getRandomFriendlyCustomerWarning(): string {
    const messages: string[] = [
      'You’ve got a fresh list of customers! It’s the perfect time to give them a call. 📞',
      'All customers are waiting for first contact. Let’s get started! 🚀',
      'No actions taken yet — but it’s never too late to reach out.',
      'Everything’s ready. You just need to start calling. 😉',
      "Customers are marked as 'new'. A great opportunity to connect!",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }
}
