import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LocalDataSource } from 'ng2-smart-table';
import { Action } from '../../@core/data/actions';
import { Customer } from '../../@core/data/customer';
import { SmartTableData } from '../../@core/data/smart-table';
import { CoreService } from '../../@core/services/core.service';
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from '../../@core/utils/save-local-storage';
import { ActionsCellComponent } from '../shared/components/custom-table-cell-render/actions-cell.component';
import { AgeCellComponent } from '../shared/components/custom-table-cell-render/age-cell.component';
import { BoldTextCellComponent } from '../shared/components/custom-table-cell-render/bold-text-cell.component';
import { CustomerStatusCellComponent } from '../shared/components/custom-table-cell-render/customer-status-cell.component';
import { DateCellComponent } from '../shared/components/custom-table-cell-render/date-cell.component';
import { EmailCellComponent } from '../shared/components/custom-table-cell-render/email-cell.component';
import { GenderCellComponent } from '../shared/components/custom-table-cell-render/gender-cell.component';
import { PhoneCellComponent } from '../shared/components/custom-table-cell-render/phone-cell.component';
import { ProcessStatusCellComponent } from '../shared/components/custom-table-cell-render/process-status-cell.component';
import { BaseTable } from '../shared/directives/base-table.directive';
import { CustomerAddDialogComponent } from './customer-add-dialog/customer-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent extends BaseTable<Customer> {
  override settings: Record<string, any> = {
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
      age: {
        title: 'Age',
        type: 'custom',
        renderComponent: AgeCellComponent,
      },
      telephone: {
        title: 'Telephone',
        type: 'custom',
        renderComponent: PhoneCellComponent,
      },
      email: {
        title: 'E-mail',
        type: 'custom',
        renderComponent: EmailCellComponent,
        hide: true,
      },
      address: {
        title: 'Address',
        type: 'string',
        hide: true,
      },
      doctor: {
        title: 'Doctor',
        type: 'string',
        hide: true,
      },
      clinic: {
        title: 'Clinic',
        type: 'string',
        hide: true,
      },
      contactNote: {
        title: 'Contact Note',
        type: 'string',
        hide: true,
      },
      processStatus: {
        title: 'Process status',
        type: 'custom',
        renderComponent: ProcessStatusCellComponent,
        hide: true,
      },
      location: {
        title: 'Location',
        type: 'string',
        hide: true,
      },
      appointment: {
        title: 'Appointment',
        type: 'custom',
        renderComponent: DateCellComponent,
        hide: true,
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value: any, row: Customer, cell: any) => row,
        onComponentInitFunction: (instance: ActionsCellComponent) => {
          instance.actionChange
            .pipe(untilDestroyed(this))
            .subscribe(({ action, row }) => {
              if (action === Action.Delete) {
                this.refresh();
              }
              if (action === Action.Edit) {
                this.addDialog(row);
              }
            });
        },
        sort: false,
        filter: false,
      },
    },
  };

  override source: LocalDataSource = new LocalDataSource();

  override localStorageSettingsKey = LOCAL_STORAGE_KEYS_FOR_TABLE.customers;

  override hiddenColumns = [
    'email',
    'address',
    'doctor',
    'clinic',
    'contactNote',
    'processStatus',
    'location',
    'appointment',
  ];
  constructor(
    private service: SmartTableData,
    private router: Router,
    override readonly dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
    const data = this.service.getData().customers;
    this.source.load(data);
  }

  addDialog(row: Customer) {
    this.dialogService.open(CustomerAddDialogComponent, {
      context: { selectedCustomer: row },
    });
  }

  view() {
    if (this.selectedRows.length > 0) {
      this.router.navigate([
        `/pages/customers/details/${this.selectedRows[0].id}`,
      ]);
    }
  }
}
