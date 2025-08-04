import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Customer } from '../../../@core/data/customer';

@Component({
  standalone: true,
  template: `@if (value) {
    {{ value.firstName }}
    {{ value.lastName }}
  }`,
})
export class CustomerDetailsCellComponent {
  @Input() value?: Customer;
}
