import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { NgClass, NgFor, NgIf } from '@angular/common';
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';
import { Grid } from '../../../lib/grid';
import { ActionsTitleComponent } from '../cells/actions-title.component';
import { CheckboxSelectAllComponent } from '../cells/checkbox-select-all.component';
import { ColumnTitleComponent } from '../cells/column-title.component';

@Component({
  selector: '[ng2-st-thead-titles-row]',
  standalone: true,
  imports: [
    CheckboxSelectAllComponent,
    NgFor,
    NgClass,
    NgIf,
    ColumnTitleComponent,
    ActionsTitleComponent,
  ],
  template: `
    <th
      ng2-st-checkbox-select-all
      *ngIf="isMultiSelectVisible"
      [grid]="grid"
      [source]="source"
      [isAllSelected]="isAllSelected"
      class="text-center"
      (click)="selectAllRows.emit($event)"
    ></th>
    <th ng2-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th
      *ngFor="let column of getVisibleColumns(grid.getColumns())"
      class="ng2-smart-th {{ column.id }}"
      [ngClass]="column.class"
      [style.width]="column.width"
    >
      <ng2-st-column-title
        [source]="source"
        [column]="column"
        (sort)="sort.emit($event)"
      ></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `,
})
export class TheadTitlesRowComponent implements OnChanges {
  @Input() grid!: Grid;
  @Input() isAllSelected!: boolean;
  @Input() source!: DataSource;

  @Output() sort = new EventEmitter<any>();
  @Output() selectAllRows = new EventEmitter<any>();

  isMultiSelectVisible!: boolean;
  showActionColumnLeft!: boolean;
  showActionColumnRight!: boolean;

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');
  }

  getVisibleColumns(columns: Column[]): Column[] {
    return (columns || []).filter((column: Column) => !column.hide);
  }
}
