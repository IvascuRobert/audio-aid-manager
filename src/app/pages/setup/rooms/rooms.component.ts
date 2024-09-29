import { Component } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { Action } from '../../../@core/data/actions';
import { Entity } from '../../../@core/data/entity';
import { Room } from '../../../@core/data/room';
import { CoreService } from '../../../@core/services/core.service';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { RoomsAddDialogComponent } from '../rooms-add-dialog/rooms-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent extends BaseTable<Room> {
  override entity = Entity.Room;

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
      shopId: {
        title: 'Shop ID',
        type: 'string',
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value: any, row: Room, cell: any) => row,
        onComponentInitFunction: (instance: ActionsCellComponent) => {
          instance.actionChange
            .pipe(
              untilDestroyed(this),
              tap(({ action, row }) => {
                if (action === Action.Delete) {
                  this.refresh();
                }
                if (action === Action.Edit) {
                  this.editDialog(row);
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

  editDialog(room?: Room) {
    if (room)
      this.dialogRef(room)
        .onClose.pipe(untilDestroyed(this))
        .subscribe((fetchData: boolean) => {
          if (fetchData) this.refresh();
        });
  }

  private dialogRef(
    room: Room | null = null
  ): NbDialogRef<RoomsAddDialogComponent> {
    return this.dialogService.open(RoomsAddDialogComponent, {
      context: {
        selected: room,
        entity: this.entity,
      },
    });
  }
}
