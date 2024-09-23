import { Component, Input } from "@angular/core";

@Component({
  template: `
    <a nbButton ghost class="text-lowercase" href="{{ 'mailto:' + value }}">
      {{ value }}
    </a>
  `,
})
export class EmailCellComponent {
  @Input() value!:string;
}
