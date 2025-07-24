import { Component } from '@angular/core';
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

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  standalone: true,
  imports: [TableComponent, PieChartWrapperComponent],
})
export class CustomersComponent {
  entity = Entity.Customer;

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
}
