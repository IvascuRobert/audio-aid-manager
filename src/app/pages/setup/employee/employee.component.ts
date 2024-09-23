import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LocalDataSource } from 'ng2-smart-table';
import { Action } from '../../../@core/data/actions';
import { SmartTableData } from '../../../@core/data/smart-table';
import { User } from '../../../@core/data/user';
import { CoreService } from '../../../@core/services/core.service';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { EmailCellComponent } from '../../shared/components/custom-table-cell-render/email-cell.component';
import { GenderCellComponent } from '../../shared/components/custom-table-cell-render/gender-cell.component';
import { RoleCellComponent } from '../../shared/components/custom-table-cell-render/role-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { EmployeeAddDialogComponent } from '../employee-add-dialog/employee-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent extends BaseTable<User> {
  override settings: Record<string, any> = {
    selectMode: 'multi',
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '10%',
      },
      email: {
        title: 'Email',
        type: 'custom',
        renderComponent: EmailCellComponent,
      },
      gender: {
        title: 'Gender',
        type: 'custom',
        renderComponent: GenderCellComponent,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      password: {
        title: 'Password',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'custom',
        renderComponent: RoleCellComponent,
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value: any, row: User, cell: any) => row,
        onComponentInitFunction: (instance: ActionsCellComponent) => {
          instance.actionChange
            .pipe(untilDestroyed(this))
            .subscribe(({ action }) => {
              if (action === Action.Delete) {
                this.refresh();
              }
            });
        },
        sort: false,
        filter: false,
      },
    },
  };

  override source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    override readonly dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
    const data = this.service.getData().users;
    this.source.load(data);
  }

  addDialog() {
    this.dialogService.open(EmployeeAddDialogComponent);
  }
}
