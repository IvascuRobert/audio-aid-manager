import { Component } from '@angular/core';
import { Entity } from '../../@core/data/entity';
import { PriceCellComponent } from '../../shared/components/custom-table-cell-render/price-cell.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { ServicesAddDialogComponent } from '../services-add-dialog/services-add-dialog.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [TableComponent],
})
export class ServicesComponent {
  entity = Entity.Service;

  settings = {
    selectMode: 'multi',
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '1%',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'custom',
        renderComponent: PriceCellComponent,
      },
    },
  };

  dialogTemplateRef = ServicesAddDialogComponent;
}
