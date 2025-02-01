import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { Entity } from '../../@core/data/entity';

import { CustomActionsComponent } from '../../shared/components/custom-actions/custom-actions.component';
import { EmailCellComponent } from '../../shared/components/custom-table-cell-render/email-cell.component';
import { GenderCellComponent } from '../../shared/components/custom-table-cell-render/gender-cell.component';
import { RoleCellComponent } from '../../shared/components/custom-table-cell-render/role-cell.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { EmployeeAddDialogComponent } from '../employee-add-dialog/employee-add-dialog.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    NbCardModule,
    CustomActionsComponent,
    TableComponent,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  entity = Entity.Employee;

  settings: Record<string, any> = {
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
    },
  };

  dialogTemplateRef = EmployeeAddDialogComponent;
}
