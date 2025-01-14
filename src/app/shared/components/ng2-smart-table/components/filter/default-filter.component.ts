import { Component, Input } from '@angular/core';

import { NgClass } from '@angular/common';
import { FilterDefault } from './filter-default';
import { CheckboxFilterComponent } from './filter-types/checkbox-filter.component';
import { InputFilterComponent } from './filter-types/input-filter.component';
import { SelectFilterComponent } from './filter-types/select-filter.component';

@Component({
  imports: [
    SelectFilterComponent,
    NgClass,
    CheckboxFilterComponent,
    InputFilterComponent,
  ],
  standalone: true,
  selector: 'default-table-filter',
  template: `
    @switch (column.getFilterType()) { @case ('list') {

    <select-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)"
    >
    </select-filter>
    } @case ('checkbox') {

    <checkbox-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)"
    >
    </checkbox-filter>
    } @default {

    <input-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)"
    >
    </input-filter>
    } }
  `,
})
export class DefaultFilterComponent extends FilterDefault {
  @Input() override query: string = '';
}
