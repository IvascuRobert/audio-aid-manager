import { Component } from '@angular/core';
import { Entity } from '../../@core/data/entity';

import { TableComponent } from '../../shared/components/table/table.component';
import { ShopsAddDialogComponent } from '../shops-add-dialog/shops-add-dialog.component';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})
export class ShopsComponent {
  entity = Entity.Shop;

  settings: Record<string, any> = {
    selectMode: 'multi',
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'text',
        width: '10%',
      },
      name: {
        title: 'Name',
        type: 'text',
      },
      address: {
        title: 'Address',
        type: 'text',
      },
    },
  };

  dialogTemplateRef = ShopsAddDialogComponent;
}
