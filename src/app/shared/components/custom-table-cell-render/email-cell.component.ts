import { Component, Input } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';

@Component({
  standalone: true,
  imports: [NbButtonModule],
  template: `
    <a nbButton ghost class="text-lowercase" href="{{ 'mailto:' + value }}">
      {{ value }}
    </a>
  `,
})
export class EmailCellComponent {
  @Input() value!: string;
}
