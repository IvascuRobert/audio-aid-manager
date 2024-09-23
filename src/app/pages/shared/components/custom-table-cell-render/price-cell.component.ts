import { Component, Input } from "@angular/core";

@Component({
  template: `{{ value | currency: 'EUR' }}`,
})
export class PriceCellComponent {
  @Input() value!:number;
}
