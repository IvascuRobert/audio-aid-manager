import { Component } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LocalDataSource } from 'ng2-smart-table';
import { Action } from '../../../@core/data/actions';
import { Entity } from '../../../@core/data/entity';
import { Location } from '../../../@core/data/location';
import { SmartTableData } from '../../../@core/data/smart-table';
import { CoreService } from '../../../@core/services/core.service';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { LocationsAddDialogComponent } from '../locations-add-dialog/locations-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent extends BaseTable<Location> {
  override entity = Entity.Location;

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
        valuePrepareFunction: (value: any, row: Location, cell: any) => row,
        onComponentInitFunction: (instance: ActionsCellComponent) => {
          instance.actionChange
            .pipe(untilDestroyed(this))
            .subscribe(({ action, row }) => {
              if (action === Action.Delete) {
                this.refresh();
              }
              if (action === Action.Edit) {
                this.editDialog(row);
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
  }

  addDialog() {
    this.dialogRef()
      .onClose.pipe(untilDestroyed(this))
      .subscribe((fetchData: boolean) => {
        if (fetchData) this.refresh();
      });
  }

  editDialog(location?: Location) {
    if (location)
      this.dialogRef(location)
        .onClose.pipe(untilDestroyed(this))
        .subscribe((fetchData: boolean) => {
          if (fetchData) this.refresh();
        });
  }

  private dialogRef(
    location: Location | null = null
  ): NbDialogRef<LocationsAddDialogComponent> {
    return this.dialogService.open(LocationsAddDialogComponent, {
      context: {
        selectedLocation: location,
        entity: this.entity,
      },
    });
  }
}
