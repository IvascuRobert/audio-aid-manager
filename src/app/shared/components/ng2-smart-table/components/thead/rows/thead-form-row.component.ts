import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { NgFor, NgIf } from '@angular/common';
import { Cell } from '../../../lib/data-set/cell';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
import { CellComponent } from '../../cell/cell.component';
import { ActionsComponent } from '../cells/actions.component';

@Component({
  selector: '[ng2-st-thead-form-row]',
  imports: [NgIf, NgFor, ActionsComponent, CellComponent],
  standalone: true,
  template: `
    <td *ngIf=""></td>
    <td *ngIf="showActionColumnLeft" class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    <td *ngFor="let cell of getVisibleCells(grid.getNewRow().getCells())">
      <ng2-smart-table-cell
        [cell]="cell"
        [grid]="grid"
        [isNew]="true"
        [createConfirm]="createConfirm"
        [inputClass]="addInputClass"
        [isInEditing]="grid.getNewRow().isInEditing"
        (edited)="onCreate($event)"
      >
      </ng2-smart-table-cell>
    </td>
    <td *ngIf="showActionColumnRight" class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
  `,
})
export class TheadFormRowComponent implements OnChanges {
  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() createConfirm!: EventEmitter<any>;

  @Output() create = new EventEmitter<any>();

  isMultiSelectVisible!: boolean;
  showActionColumnLeft!: boolean;
  showActionColumnRight!: boolean;
  addInputClass!: string;

  onCreate(event: any) {
    event.stopPropagation();

    this.grid.create(this.grid.getNewRow(), this.createConfirm);
  }

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.addInputClass = this.grid.getSetting('add.inputClass');
  }

  getVisibleCells(cells: Cell[]): Cell[] {
    return (cells || []).filter((cell: Cell) => !cell.getColumn().hide);
  }
}
