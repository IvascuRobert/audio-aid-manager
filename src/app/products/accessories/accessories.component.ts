import { Component } from '@angular/core';
import { Entity } from '../../@core/data/entity';
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from '../../@core/utils/save-local-storage';
import { AccessoryStatusCellComponent } from '../../shared/components/custom-table-cell-render/accessory-status-cell.component';
import { PriceCellComponent } from '../../shared/components/custom-table-cell-render/price-cell.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { AccessoriesAddDialogComponent } from '../accessories-add-dialog/accessories-add-dialog.component';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
  standalone: true,
  imports: [TableComponent],
})
export class AccessoriesComponent {
  entity = Entity.Accessory;

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
      groupId: {
        title: 'Group',
        type: 'string',
      },
      serialNumber: {
        title: 'Serial number',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      brand: {
        title: 'Brand',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'custom',
        renderComponent: PriceCellComponent,
      },
      shopId: {
        title: 'Shop',
        type: 'string',
      },
    },
  };

  dialogTemplateRef = AccessoriesAddDialogComponent;
}
