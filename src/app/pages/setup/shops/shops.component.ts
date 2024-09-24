import { Component } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Action } from '../../../@core/data/actions';
import { Entity } from '../../../@core/data/entity';
import { Shop } from '../../../@core/data/shop';
import { CoreService } from '../../../@core/services/core.service';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { ShopsAddDialogComponent } from '../shops-add-dialog/shops-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})
export class ShopsComponent extends BaseTable<Shop> {
  override entity = Entity.Shop;

  override settings: Record<string, any> = {
    selectMode: 'multi',
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '10%',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value: any, row: Shop, cell: any) => row,
        onComponentInitFunction: (instance: ActionsCellComponent) => {
          instance.actionChange
            .pipe(untilDestroyed(this))
            .subscribe(({ action, row }) => {
              if (action === Action.Delete) {
                this.refresh();
              }
              if (action === Action.Edit) {
                this.editDialog(row);
              }
            });
        },
        sort: false,
        filter: false,
      },
    },
  };

  constructor(
    override readonly dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
  }

  addDialog() {
    this.dialogRef()
      .onClose.pipe(untilDestroyed(this))
      .subscribe((fetchData: boolean) => {
        if (fetchData) this.refresh();
      });
  }

  editDialog(shop?: Shop) {
    if (shop)
      this.dialogRef(shop)
        .onClose.pipe(untilDestroyed(this))
        .subscribe((fetchData: boolean) => {
          if (fetchData) this.refresh();
        });
  }

  private dialogRef(
    shop: Shop | null = null
  ): NbDialogRef<ShopsAddDialogComponent> {
    return this.dialogService.open(ShopsAddDialogComponent, {
      context: {
        selectedShop: shop,
        entity: this.entity,
      },
    });
  }
}