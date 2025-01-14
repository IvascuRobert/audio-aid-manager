import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { NgClass } from '@angular/common';
import { DefaultFilter } from './default-filter';

@Component({
  selector: 'input-filter',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  template: `
    <input
      [ngClass]="inputClass"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ column.title }}"
    />
  `,
})
export class InputFilterComponent
  extends DefaultFilter
  implements OnInit, OnChanges
{
  inputControl = new FormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.query) {
      this.inputControl.setValue(this.query);
    }
    this.inputControl.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(this.delay))
      .subscribe((value: string) => {
        this.query = this.inputControl.value;
        this.setFilter();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['query']) {
      this.inputControl.setValue(this.query);
    }
  }
}
