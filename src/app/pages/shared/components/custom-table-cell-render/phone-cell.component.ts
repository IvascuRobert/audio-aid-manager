import { Component, Input } from "@angular/core";

@Component({
  template: `
    <a nbButton ghost href="{{ 'tel:' + value }}">
      {{ value }}
    </a>
  `,
})
export class PhoneCellComponent {
  @Input() value;
}
