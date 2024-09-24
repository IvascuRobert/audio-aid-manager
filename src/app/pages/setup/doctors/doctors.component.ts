import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
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
  override entity = Entity.Doctor;

  override settings: Record<string, any> = {
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
        valuePrepareFunction: (
          value: any,
          row: ActionsCellComponent,
          cell: any
        ) => row,
        onComponentInitFunction: (instance: ActionsCellComponent) => {
          instance.actionChange
            .pipe(untilDestroyed(this))
            .subscribe(({ action, row }) => {
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
            });
        },
        sort: false,
        filter: false,
      },
    },
  };

  constructor(
    coreService: CoreService,
    override readonly dialogService: NbDialogService
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

  editDialog(doctor?: Doctor) {
    if (doctor)
      this.dialogRef(doctor)
        .onClose.pipe(
          untilDestroyed(this),
          tap((fetchData: boolean) => {
            if (fetchData) this.refresh();
          })
        )
        .subscribe();
  }

  private dialogRef(
    doctor: Doctor | null = null
  ): NbDialogRef<DoctorsAddDialogComponent> {
    return this.dialogService.open(DoctorsAddDialogComponent, {
      context: {
        selectedDoctor: doctor,
        entity: this.entity,
      },
    });
  }
}
