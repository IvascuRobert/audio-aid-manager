import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { NgClass } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';

@Component({
  selector: 'checkbox-filter',
  imports: [NgClass, ReactiveFormsModule],
  standalone: true,
  template: `
    <input
      type="checkbox"
      [formControl]="inputControl"
      [ngClass]="inputClass"
      class="form-control"
    />
    @if (filterActive) {
    <a href="#" (click)="resetFilter($event)">{{
      column.getFilterConfig()?.resetText || 'reset'
    }}</a>
    }
  `,
})
export class CheckboxFilterComponent extends DefaultFilter implements OnInit {
  filterActive: boolean = false;
  inputControl = new FormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    this.changesSubscription = this.inputControl.valueChanges
      .pipe(debounceTime(this.delay))
      .subscribe((checked: boolean) => {
        this.filterActive = true;
        const trueVal =
          (this.column.getFilterConfig() &&
            this.column.getFilterConfig().true) ||
          true;
        const falseVal =
          (this.column.getFilterConfig() &&
            this.column.getFilterConfig().false) ||
          false;
        this.query = checked ? trueVal : falseVal;
        this.setFilter();
      });
  }

  resetFilter(event: any) {
    event.preventDefault();
    this.query = '';
    this.inputControl.setValue(false, { emitEvent: false });
    this.filterActive = false;
    this.setFilter();
  }
}
