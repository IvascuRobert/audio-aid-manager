import { Component } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { Action } from '../../../@core/data/actions';
import { Entity } from '../../../@core/data/entity';
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
  override entity = Entity.User;

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
      lastName: {
        title: 'Last name',
        type: 'string',
      },
      firstName: {
        title: 'First name',
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

  constructor(
    override readonly dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
  }

  addDialog() {
    this.dialogRef()
      .onClose.pipe(
        untilDestroyed(this),
        tap((fetchData: boolean) => {
          if (fetchData) this.refresh();
        })
      )
      .subscribe();
  }

  editDialog(employee?: User) {
    if (employee)
      this.dialogRef(employee)
        .onClose.pipe(
          untilDestroyed(this),
          tap((fetchData: boolean) => {
            if (fetchData) this.refresh();
          })
        )
        .subscribe();
  }

  private dialogRef(
    employee: User | null = null
  ): NbDialogRef<EmployeeAddDialogComponent> {
    return this.dialogService.open(EmployeeAddDialogComponent, {
      context: {
        selectedEmployee: employee,
        entity: this.entity,
      },
    });
  }
}
