import { Component } from '@angular/core';
import { Entity } from '../../@core/data/entity';

import { TableComponent } from '../../shared/components/table/table.component';
import { DoctorsAddDialogComponent } from '../doctors-add-dialog/doctors-add-dialog.component';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent {
  entity = Entity.Doctor;

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
    },
  };

  dialogTemplateRef = DoctorsAddDialogComponent;
}
