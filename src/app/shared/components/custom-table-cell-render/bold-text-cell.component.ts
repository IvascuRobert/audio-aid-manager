import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  template: `<strong>{{ value }}</strong>`,
})
export class BoldTextCellComponent {
  @Input() value!: string;
}
