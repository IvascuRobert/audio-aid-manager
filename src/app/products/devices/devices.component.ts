import { Component } from '@angular/core';
import { Entity } from '../../@core/data/entity';
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from '../../@core/utils/save-local-storage';
import { AccessoryStatusCellComponent } from '../../shared/components/custom-table-cell-render/accessory-status-cell.component';
import { ColorCellComponent } from '../../shared/components/custom-table-cell-render/color-cell.component';
import { PriceCellComponent } from '../../shared/components/custom-table-cell-render/price-cell.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { DevicesAddDialogComponent } from '../devices-add-dialog/devices-add-dialog.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  standalone: true,
  imports: [TableComponent],
})
export class DevicesComponent {
  entity = Entity.Device;

  settings: Record<string, any> = {
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
      shopId: {
        title: 'Shop',
        type: 'string',
        hide: true,
      },
      customer: {
        title: 'Customer',
        type: 'string',
        hide: true,
      },
    },
  };

  localStorageSettingsKey = LOCAL_STORAGE_KEYS_FOR_TABLE.devices;

  hiddenColumns = ['aslGroup', 'price', 'shopId', 'customer'];

  dialogTemplateRef = DevicesAddDialogComponent;
}
