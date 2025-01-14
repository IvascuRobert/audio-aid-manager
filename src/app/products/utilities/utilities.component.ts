import { Component } from '@angular/core';
import { Entity } from '../../@core/data/entity';
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from '../../@core/utils/save-local-storage';
import { PriceCellComponent } from '../../shared/components/custom-table-cell-render/price-cell.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { UtilitiesAddDialogComponent } from '../utilities-add-dialog/utilities-add-dialog.component';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss'],
  standalone: true,
  imports: [TableComponent],
})
export class UtilitiesComponent {
  entity = Entity.Utility;

  settings: Record<string, any> = {
    selectMode: 'multi',
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      type: {
        title: 'Type',
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
      quantity: {
        title: 'Quantity',
        type: 'string',
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
      },
    },
  };

  localStorageSettingsKey = LOCAL_STORAGE_KEYS_FOR_TABLE.utilities;

  hiddenColumns = ['price'];

  dialogTemplateRef = UtilitiesAddDialogComponent;
}
