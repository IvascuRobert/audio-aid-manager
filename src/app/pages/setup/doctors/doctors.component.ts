import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Action } from '../../../@core/data/actions';
import { Doctor } from '../../../@core/data/doctor';
import { Entity } from '../../../@core/data/entity';
import { CoreService } from '../../../@core/services/core.service';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { DoctorsAddDialogComponent } from '../doctors-add-dialog/doctors-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent extends BaseTable<Doctor> implements OnInit {
  entity = Entity.Doctor;

  settings: Record<string, any> = {
    selectMode: 'multi',
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '10%',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value, row, cell) => row,
        onComponentInitFunction: (instance) => {
          instance.actionChange.subscribe(({ action, row }) => {
            if (action === Action.Delete) {
              this.removeItem(row);
            }
          });
        },
        sort: false,
        filter: false,
      },
    },
  };

  constructor(coreService: CoreService, dialogService: NbDialogService) {
    super(coreService, dialogService);
  }

  addDialog() {
    this.dialogRef()
      .onClose.pipe(untilDestroyed(this))
      .subscribe((fetchData: boolean) => {
        if (fetchData) this.reloadDoctors();
      });
  }

  editDialog() {
    this.dialogRef(this.selectedRows[0])
      .onClose.pipe(untilDestroyed(this))
      .subscribe((fetchData: boolean) => {
        if (fetchData) this.reloadDoctors();
      });
  }

  private dialogRef(
    doctor: Doctor | null = null
  ): NbDialogRef<DoctorsAddDialogComponent> {
    return this.dialogService.open(DoctorsAddDialogComponent, {
      context: {
        doctor,
      },
    });
  }
}
