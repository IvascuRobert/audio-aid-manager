import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LocalDataSource } from 'ng2-smart-table';
import { tap } from 'rxjs/operators';
import { Action } from '../../@core/data/actions';
import { Customer } from '../../@core/data/customer';
import { Entity } from '../../@core/data/entity';
import { CoreService } from '../../@core/services/core.service';
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from '../../@core/utils/save-local-storage';
import { ActionsCellComponent } from '../shared/components/custom-table-cell-render/actions-cell.component';
import { AgeCellComponent } from '../shared/components/custom-table-cell-render/age-cell.component';
import { BoldTextCellComponent } from '../shared/components/custom-table-cell-render/bold-text-cell.component';
import { CustomerStatusCellComponent } from '../shared/components/custom-table-cell-render/customer-status-cell.component';
import { EmailCellComponent } from '../shared/components/custom-table-cell-render/email-cell.component';
import { GenderCellComponent } from '../shared/components/custom-table-cell-render/gender-cell.component';
import { PhoneCellComponent } from '../shared/components/custom-table-cell-render/phone-cell.component';
import { BaseTable } from '../shared/directives/base-table.directive';
import { CustomerAddDialogComponent } from './customer-add-dialog/customer-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent extends BaseTable<Customer> {
  override entity = Entity.Customer;

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
        hide: true,
      },
      address: {
        title: 'Address',
        type: 'string',
        hide: true,
      },
      doctorId: {
        title: 'Doctor',
        type: 'string',
        hide: true,
      },
      clinicId: {
        title: 'Clinic',
        type: 'string',
        hide: true,
      },
      contactNote: {
        title: 'Contact Note',
        type: 'string',
        hide: true,
      },
      taxCode: {
        title: 'Tax code',
        type: 'string',
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
            .pipe(
              untilDestroyed(this),
              tap(({ action, row }) => {
                switch (action) {
                  case Action.Delete:
                    this.openRemoveDialog(row.id);
                    break;

                  case Action.Edit:
                    this.editDialog(row);
                    break;
                  default:
                    break;
                }
              })
            )
            .subscribe();
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
    'doctorId',
    'clinicId',
    'contactNote',
  ];

  override dialogTemplateRef = CustomerAddDialogComponent;

  constructor(
    private router: Router,
    override readonly dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
  }

  view() {
    if (this.selectedRows.length > 0) {
      this.router.navigate([
        `/pages/customers/details/${this.selectedRows[0].id}`,
      ]);
    }
  }
}
