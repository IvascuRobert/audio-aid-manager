import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { NgClass } from '@angular/common';
import { Column } from '../../../../lib/data-set/column';
import { DataSource } from '../../../../lib/data-source/data-source';

@Component({
  selector: 'ng2-smart-table-title',
  styleUrls: ['./title.component.scss'],
  standalone: true,
  imports: [NgClass],
  template: `
    @if (column.isSortable) {
      <a
        href="#"
        (click)="_sort($event)"
        class="ng2-smart-sort-link sort"
        [ngClass]="currentDirection"
      >
        {{ column.title }}
      </a>
    } @else {
      <span class="ng2-smart-sort">{{ column.title }}</span>
    }
  `,
})
export class TitleComponent implements OnChanges {
  currentDirection = '';
  @Input() column!: Column;
  @Input() source!: DataSource;
  @Output() sort = new EventEmitter<any>();

  protected dataChangedSub!: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['source']) {
      if (!changes['source'].firstChange) {
        this.dataChangedSub.unsubscribe();
      }
      this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
        const sortConf = this.source.getSort();

        if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
          this.currentDirection = sortConf[0]['direction'];
        } else {
          this.currentDirection = '';
        }

        sortConf.forEach((fieldConf: any) => {});
      });
    }
  }

  _sort(event: any) {
    event.preventDefault();
    this.changeSortDirection();
    this.source.setSort([
      {
        field: this.column.id,
        direction: this.currentDirection,
        compare: this.column.getCompareFunction(),
      },
    ]);
    this.sort.emit(null);
  }

  changeSortDirection(): string {
    if (this.currentDirection) {
      const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
      this.currentDirection = newDirection;
    } else {
      this.currentDirection = this.column.sortDirection;
    }
    return this.currentDirection;
  }
}
