import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';

import { NgClass } from '@angular/common';
import { DefaultFilter } from './default-filter';

@Component({
  selector: 'select-filter',
  standalone: true,
  imports: [NgClass, FormsModule],
  template: `
    <select
      [ngClass]="inputClass"
      class="form-control"
      #inputControl
      [(ngModel)]="query"
    >
      <option value="">{{ column.getFilterConfig().selectText }}</option>
      <option
        *ngFor="let option of column.getFilterConfig().list"
        [value]="option.value"
      >
        {{ option.title }}
      </option>
    </select>
  `,
})
export class SelectFilterComponent extends DefaultFilter implements OnInit {
  @ViewChild('inputControl', { read: NgControl, static: true })
  inputControl!: NgControl;

  constructor() {
    super();
  }

  ngOnInit() {
    this.inputControl.valueChanges
      ?.pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
      .subscribe((value: string) => this.setFilter());
  }
}
