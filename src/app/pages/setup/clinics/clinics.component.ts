import { Component } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { Action } from '../../../@core/data/actions';
import { Clinic } from '../../../@core/data/clinic';
import { Entity } from '../../../@core/data/entity';
import { CoreService } from '../../../@core/services/core.service';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { ClinicsAddDialogComponent } from '../clinics-add-dialog/clinics-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss'],
})
export class ClinicsComponent extends BaseTable<Clinic> {
  override entity = Entity.Clinic;

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
      address: {
        title: 'Address',
        type: 'string',
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value: any, row: Clinic, cell: any) => row,
        onComponentInitFunction: (instance: ActionsCellComponent) => {
          instance.actionChange
            .pipe(
              untilDestroyed(this),
              tap(({ action, row }) => {
                if (action === Action.Delete) {
                  this.refresh();
                }
                if (action === Action.Edit) {
                  this.editDialog(row);
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
      .onClose.pipe(untilDestroyed(this))
      .subscribe((fetchData: boolean) => {
        if (fetchData) this.refresh();
      });
  }

  editDialog(clinic?: Clinic) {
    if (clinic)
      this.dialogRef(clinic)
        .onClose.pipe(untilDestroyed(this))
        .subscribe((fetchData: boolean) => {
          if (fetchData) this.refresh();
        });
  }

  private dialogRef(
    clinic: Clinic | null = null
  ): NbDialogRef<ClinicsAddDialogComponent> {
    return this.dialogService.open(ClinicsAddDialogComponent, {
      context: {
        selected: clinic,
        entity: this.entity,
      },
    });
  }
}
