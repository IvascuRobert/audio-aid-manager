import { Component, inject, OnInit, signal } from '@angular/core';
import { Entity } from '../../@core/data/entity';
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from '../../@core/utils/save-local-storage';
import { AccessoryStatusCellComponent } from '../../shared/components/custom-table-cell-render/accessory-status-cell.component';
import { PriceCellComponent } from '../../shared/components/custom-table-cell-render/price-cell.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { AccessoriesAddDialogComponent } from '../accessories-add-dialog/accessories-add-dialog.component';
import { NbAlertModule } from '@nebular/theme';
import { filter, map } from 'rxjs';
import { DeviceState, DeviceStatus } from '../../@core/data/device';
import { CoreService } from '../../@core/services/core.service';
import { AccessoryState, AccessoryStatus } from '../../@core/data/accessory';
import { AsyncPipe } from '@angular/common';
import { CustomerDetailsCellComponent } from '../../shared/components/custom-table-cell-render/customer-details-cell.component';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
  standalone: true,
  imports: [TableComponent, NbAlertModule, AsyncPipe],
})
export class AccessoriesComponent implements OnInit {
  coreService = inject(CoreService);

  entity = Entity.Accessory;

  settings: Record<string, any> = {
    selectMode: 'multi',
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
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
      customer: {
        title: 'Customer',
        type: 'custom',
        renderComponent: CustomerDetailsCellComponent,
      },
    },
  };

  dialogTemplateRef = AccessoriesAddDialogComponent;
  warningMessage = signal('');

  showWarningMessage = signal(true);

  countWithFreeStatus$ = this.coreService
    .getEntities$<AccessoryState>(Entity.Accessory)
    .pipe(
      filter((res) => !!this.entity && !!res?.entities),
      map(
        ({ entities }) =>
          Object.values(entities).filter(
            (res) => res.status === AccessoryStatus.Free,
          ).length,
      ),
    );

  ngOnInit(): void {
    this.warningMessage.set(
      'Devices stock is currently empty. Please restock as soon as possible.',
    );
  }
}
