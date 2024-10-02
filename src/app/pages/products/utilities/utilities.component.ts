import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { Action } from '../../../@core/data/actions';
import { Entity } from '../../../@core/data/entity';
import { Utility } from '../../../@core/data/utility';
import { CoreService } from '../../../@core/services/core.service';
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from '../../../@core/utils/save-local-storage';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { PriceCellComponent } from '../../shared/components/custom-table-cell-render/price-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { UtilitiesAddDialogComponent } from '../utilities-add-dialog/utilities-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss'],
})
export class UtilitiesComponent extends BaseTable<Utility> {
  override entity = Entity.Utility;

  override settings: Record<string, any> = {
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
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value: any, row: Utility, cell: any) => row,
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
            .subscribe(({ action, row }) => {
              if (action === Action.Delete) {
                this.refresh();
              }
            });
        },
        sort: false,
        filter: false,
      },
    },
  };

  override localStorageSettingsKey = LOCAL_STORAGE_KEYS_FOR_TABLE.utilities;

  override hiddenColumns = ['price'];

  override dialogTemplateRef = UtilitiesAddDialogComponent;

  selectedColumns = [];

  constructor(
    override readonly dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
  }
}
