import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { Action } from '../../../@core/data/actions';
import { Device } from '../../../@core/data/device';
import { Entity } from '../../../@core/data/entity';
import { CoreService } from '../../../@core/services/core.service';
import { AccessoryStatusCellComponent } from '../../shared/components/custom-table-cell-render/accessory-status-cell.component';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { ColorCellComponent } from '../../shared/components/custom-table-cell-render/color-cell.component';
import { PriceCellComponent } from '../../shared/components/custom-table-cell-render/price-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { DevicesAddDialogComponent } from '../devices-add-dialog/devices-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent extends BaseTable<Device> {
  override entity = Entity.Device;

  override settings: Record<string, any> = {
    selectMode: 'multi',
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      status: {
        title: 'Status',
        type: 'custom',
        renderComponent: AccessoryStatusCellComponent,
      },
      group: {
        title: 'Group',
        type: 'string',
      },
      brand: {
        title: 'Brand',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      serialNumber: {
        title: 'Serial Number',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      battery: {
        title: 'Battery',
        type: 'string',
      },
      qualityLevel: {
        title: 'Quality Level',
        type: 'string',
      },
      color: {
        title: 'Color',
        type: 'custom',
        renderComponent: ColorCellComponent,
      },
      aslGroup: {
        title: 'ASL Group',
        type: 'string',
        hide: true,
      },
      price: {
        title: 'Price',
        type: 'custom',
        renderComponent: PriceCellComponent,
        hide: true,
      },
      location: {
        title: 'Location',
        type: 'string',
        hide: true,
      },
      customer: {
        title: 'Customer',
        type: 'string',
        hide: true,
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value: any, row: Device, cell: any) => row,
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

  override dialogTemplateRef = DevicesAddDialogComponent;

  constructor(
    override readonly dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
  }
}
