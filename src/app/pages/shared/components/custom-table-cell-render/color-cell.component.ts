import { Component, Input } from '@angular/core';

@Component({
  template: `
    <ngx-colors
      [(ngModel)]="value"
      ngx-colors-trigger
      [hideTextInput]="true"
      [hideColorPicker]="true"
    ></ngx-colors>
  `,
})
export class ColorCellComponent {
  @Input() value!: string;
}
