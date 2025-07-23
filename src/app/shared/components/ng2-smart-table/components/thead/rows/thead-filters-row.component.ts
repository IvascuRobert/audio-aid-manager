import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { NgFor, NgIf } from '@angular/common';
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';
import { Grid } from '../../../lib/grid';
import { FilterComponent } from '../../filter/filter.component';
import { AddButtonComponent } from '../cells/add-button.component';

@Component({
  selector: '[ng2-st-thead-filters-row]',
  standalone: true,
  imports: [NgIf, FilterComponent, AddButtonComponent, NgFor],
  template: `
    <th *ngIf="isMultiSelectVisible"></th>
    <th
      ng2-st-add-button
      *ngIf="showActionColumnLeft"
      [grid]="grid"
      (create)="create.emit($event)"
    ></th>
    <th
      *ngFor="let column of getVisibleColumns(grid.getColumns())"
      class="ng2-smart-th {{ column.id }}"
    >
      <ng2-smart-table-filter
        [source]="source"
        [column]="column"
        [inputClass]="filterInputClass"
        (filter)="filter.emit($event)"
      >
      </ng2-smart-table-filter>
    </th>
    <th
      ng2-st-add-button
      *ngIf="showActionColumnRight"
      [grid]="grid"
      [source]="source"
      (create)="create.emit($event)"
    ></th>
  `,
})
export class TheadFiltersRowComponent implements OnChanges {
  @Input() grid!: Grid;
  @Input() source!: DataSource;

  @Output() create = new EventEmitter<any>();
  @Output() filter = new EventEmitter<any>();

  isMultiSelectVisible!: boolean;
  showActionColumnLeft!: boolean;
  showActionColumnRight!: boolean;
  filterInputClass!: string;

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.filterInputClass = this.grid.getSetting('filter.inputClass');
  }

  getVisibleColumns(columns: Column[]): Column[] {
    return (columns || []).filter((column: Column) => !column.hide);
  }
}
