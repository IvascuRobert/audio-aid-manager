import { Component, inject, OnInit, signal } from '@angular/core';
import { Entity } from '../../@core/data/entity';
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from '../../@core/utils/save-local-storage';
import { AccessoryStatusCellComponent } from '../../shared/components/custom-table-cell-render/accessory-status-cell.component';
import { ColorCellComponent } from '../../shared/components/custom-table-cell-render/color-cell.component';
import { PriceCellComponent } from '../../shared/components/custom-table-cell-render/price-cell.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { DevicesAddDialogComponent } from '../devices-add-dialog/devices-add-dialog.component';
import { NbAlertModule } from '@nebular/theme';
import { DeviceState, DeviceStatus } from '../../@core/data/device';
import { filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CoreService } from '../../@core/services/core.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  standalone: true,
  imports: [TableComponent, NbAlertModule, AsyncPipe],
})
export class DevicesComponent implements OnInit {
  coreService = inject(CoreService);

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
        type: 'string',
      },
    },
  };

  dialogTemplateRef = DevicesAddDialogComponent;
  warningMessage = signal('');

  showWarningMessage = signal(true);

  countWithFreeStatus$ = this.coreService
    .getEntities$<DeviceState>(Entity.Device)
    .pipe(
      filter((res) => !!this.entity && !!res?.entities),
      map(
        ({ entities }) =>
          Object.values(entities).filter(
            (res) => res.status === DeviceStatus.Free,
          ).length,
      ),
    );

  ngOnInit(): void {
    this.warningMessage.set(
      'Devices stock is currently empty. Please restock as soon as possible.',
    );
  }
}
