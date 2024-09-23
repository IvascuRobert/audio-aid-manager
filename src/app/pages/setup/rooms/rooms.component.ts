import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LocalDataSource } from 'ng2-smart-table';
import { Action } from '../../../@core/data/actions';
import { Room } from '../../../@core/data/room';
import { SmartTableData } from '../../../@core/data/smart-table';
import { CoreService } from '../../../@core/services/core.service';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { RoomsAddDialogComponent } from '../rooms-add-dialog/rooms-add-dialog.component';
import { tap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'ngx-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent extends BaseTable<Room> {
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
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value:any, row:Room, cell:any) => row,
        onComponentInitFunction: (instance: ActionsCellComponent) => {
          instance.actionChange
            .pipe(untilDestroyed(this),
          tap(({ action }) => {
            if (action === Action.Delete) {
              this.refresh();
            }
          }))
            .subscribe();
        },
        sort: false,
        filter: false,
      },
    },
  };

  override source: LocalDataSource = new LocalDataSource();


  constructor(
    private service: SmartTableData,
    override readonly dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
    const data = this.service.getData().rooms;
    this.source.load(data);
  }

  addDialog() {
    this.dialogService.open(RoomsAddDialogComponent);
  }
}
