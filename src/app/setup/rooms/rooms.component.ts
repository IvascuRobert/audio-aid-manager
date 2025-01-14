import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Entity } from '../../@core/data/entity';

import { TableComponent } from '../../shared/components/table/table.component';
import { RoomsAddDialogComponent } from '../rooms-add-dialog/rooms-add-dialog.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  entity = Entity.Room;

  settings: Record<string, any> = {
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
    },
  };

  dialogTemplateRef = RoomsAddDialogComponent;

  constructor(readonly dialogService: NbDialogService) {}
}
