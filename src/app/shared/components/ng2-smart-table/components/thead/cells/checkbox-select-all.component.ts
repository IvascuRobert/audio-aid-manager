import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import { DataSource } from '../../../lib/data-source/data-source';
import { Grid } from '../../../lib/grid';

@Component({
  standalone: true,
  imports: [FormsModule, NbCheckboxModule],
  selector: '[ng2-st-checkbox-select-all]',
  template: ` <nb-checkbox [ngModel]="isAllSelected"></nb-checkbox> `,
})
export class CheckboxSelectAllComponent {
  @Input() grid!: Grid;
  @Input() source!: DataSource;
  @Input() isAllSelected!: boolean;
}
