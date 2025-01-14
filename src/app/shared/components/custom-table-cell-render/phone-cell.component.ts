import { Component, Input } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';

@Component({
  standalone: true,
  imports: [NbButtonModule],
  template: `
    <a nbButton ghost href="{{ 'tel:' + value }}">
      {{ value }}
    </a>
  `,
})
export class PhoneCellComponent {
  @Input() value!: string;
}
