import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { Accessory } from '../../../@core/data/accessory';
import { Action } from '../../../@core/data/actions';
import { Entity } from '../../../@core/data/entity';
import { CoreService } from '../../../@core/services/core.service';
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from '../../../@core/utils/save-local-storage';
import { AccessoryStatusCellComponent } from '../../shared/components/custom-table-cell-render/accessory-status-cell.component';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { PriceCellComponent } from '../../shared/components/custom-table-cell-render/price-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { AccessoriesAddDialogComponent } from '../accessories-add-dialog/accessories-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
})
export class AccessoriesComponent extends BaseTable<Accessory> {
  override entity = Entity.Accessory;

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
        hide: true,
      },
      shopId: {
        title: 'Shop',
        type: 'string',
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value: any, row: Accessory, cell: any) => row,
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

  override localStorageSettingsKey = LOCAL_STORAGE_KEYS_FOR_TABLE.accessories;

  override hiddenColumns = ['price'];

  override dialogTemplateRef = AccessoriesAddDialogComponent;

  constructor(
    override readonly dialogService: NbDialogService,
    coreService: CoreService,
    activatedRoute: ActivatedRoute
  ) {
    super(coreService, dialogService, activatedRoute);
  }
}
