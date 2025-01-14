import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
import { Grid } from '../../lib/grid';
import { EditCellComponent } from './cell-edit-mode/edit-cell.component';
import { ViewCellComponent } from './cell-view-mode/view-cell.component';

@Component({
  selector: 'ng2-smart-table-cell',
  standalone: true,
  imports: [ViewCellComponent, EditCellComponent],
  template: `
    @if (!isInEditing) {
    <table-cell-view-mode [cell]="cell"></table-cell-view-mode>
    } @else{

    <table-cell-edit-mode
      [cell]="cell"
      [inputClass]="inputClass"
      (edited)="onEdited($event)"
    >
    </table-cell-edit-mode>
    }
  `,
})
export class CellComponent {
  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() editConfirm!: EventEmitter<any>;
  @Input() createConfirm!: EventEmitter<any>;
  @Input() isNew!: boolean;
  @Input() cell!: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';
  @Input() isInEditing: boolean = false;

  @Output() edited = new EventEmitter<any>();

  onEdited(event: any) {
    if (this.isNew) {
      this.grid.create(this.grid.getNewRow(), this.createConfirm);
    } else {
      this.grid.save(this.row, this.editConfirm);
    }
  }
}
