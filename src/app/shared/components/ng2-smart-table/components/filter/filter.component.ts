import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomFilterComponent } from './custom-filter.component';
import { DefaultFilterComponent } from './default-filter.component';
import { FilterDefault } from './filter-default';

@Component({
  selector: 'ng2-smart-table-filter',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  imports: [CustomFilterComponent, DefaultFilterComponent],
  template: `
    @if (column.isFilterable) {
      @switch (column.getFilterType()) {
        @case ('custom') {
          <custom-table-filter
            [query]="query"
            [column]="column"
            [source]="source"
            [inputClass]="inputClass"
            (filter)="onFilter($event)"
          >
          </custom-table-filter>
        }
        @default {
          <default-table-filter
            [query]="query"
            [column]="column"
            [source]="source"
            [inputClass]="inputClass"
            (filter)="onFilter($event)"
          >
          </default-table-filter>
        }
      }
    }
  `,
})
export class FilterComponent extends FilterDefault implements OnChanges {
  override query = '';
  protected dataChangedSub!: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['source']) {
      if (!changes['source'].firstChange) {
        this.dataChangedSub.unsubscribe();
      }
      this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
        const filterConf = this.source.getFilter();
        if (
          filterConf &&
          filterConf.filters &&
          filterConf.filters.length === 0
        ) {
          this.query = '';

          // add a check for existing filters an set the query if one exists for this column
          // this covers instances where the filter is set by user code while maintaining existing functionality
        } else if (
          filterConf &&
          filterConf.filters &&
          filterConf.filters.length > 0
        ) {
          filterConf.filters.forEach((k: any, v: any) => {
            if (k.field == this.column.id) {
              this.query = k.search;
            }
          });
        }
      });
    }
  }
}
