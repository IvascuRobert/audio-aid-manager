import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { NgIf } from '@angular/common';
import { DataSource } from '../../lib/data-source/data-source';
import { Grid } from '../../lib/grid';
import { TheadFiltersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';

@Component({
  selector: '[ng2-st-thead]',
  templateUrl: './thead.component.html',
  imports: [
    TheadTitlesRowComponent,
    TheadFiltersRowComponent,
    TheadFormRowComponent,
    NgIf,
  ],
  standalone: true,
})
export class Ng2SmartTableTheadComponent implements OnChanges {
  @Input() grid!: Grid;
  @Input() source!: DataSource;
  @Input() isAllSelected!: boolean;
  @Input() createConfirm!: EventEmitter<any>;

  @Output() sort = new EventEmitter<any>();
  @Output() selectAllRows = new EventEmitter<any>();
  @Output() create = new EventEmitter<any>();
  @Output() filter = new EventEmitter<any>();

  isHideHeader!: boolean;
  isHideSubHeader!: boolean;

  ngOnChanges() {
    this.isHideHeader = this.grid.getSetting('hideHeader');
    this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
  }
}
