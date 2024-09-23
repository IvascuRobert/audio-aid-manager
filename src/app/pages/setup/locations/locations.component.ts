import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LocalDataSource } from 'ng2-smart-table';
import { Action } from '../../../@core/data/actions';
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
      address: {
        title: 'Address',
        type: 'string',
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value, row, cell) => row,
        onComponentInitFunction: (instance) => {
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

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    readonly dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
    const data = this.service.getData().locations;
    this.source.load(data);
  }

  addDialog(row) {
    this.dialogService.open(LocationsAddDialogComponent, {
      context: { selectedLocation: row },
    });
  }
}
