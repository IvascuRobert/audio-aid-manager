import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CurrencyPipe],
  template: `{{ value | currency : 'EUR' }}`,
})
export class PriceCellComponent {
  @Input() value!: number;
}
