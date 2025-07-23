import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';
import { CustomViewComponent } from './custom-view.component';

@Component({
  selector: 'table-cell-view-mode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CustomViewComponent],
  template: `
    @switch (cell.getColumn().type) {
      @case ('custom') {
        <custom-view-component [cell]="cell"></custom-view-component>
      }
      @case ('html') {
        <div [innerHTML]="cell.getValue()"></div>
      }
      @default {
        <div>{{ cell.getValue() }}</div>
      }
    }
  `,
})
export class ViewCellComponent {
  @Input() cell!: Cell;
}
