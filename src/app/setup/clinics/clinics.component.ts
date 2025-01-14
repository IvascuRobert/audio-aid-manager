import { Component, DestroyRef, inject } from '@angular/core';
import { Entity } from '../../@core/data/entity';
import { TableComponent } from '../../shared/components/table/table.component';
import { ClinicsAddDialogComponent } from '../clinics-add-dialog/clinics-add-dialog.component';

@Component({
  standalone: true,
  imports: [TableComponent],
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss'],
})
export class ClinicsComponent {
  destroyRef = inject(DestroyRef);

  entity = Entity.Clinic;

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
      address: {
        title: 'Address',
        type: 'text',
      },
    },
  };

  dialogTemplateRef = ClinicsAddDialogComponent;
}
