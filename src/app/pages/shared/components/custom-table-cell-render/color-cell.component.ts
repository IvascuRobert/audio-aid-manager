import { Component, Input } from '@angular/core';

@Component({
  template: `
  <div class="d-flex justify-content-center">
    <ngx-colors
      [disabled]="true"
      [(ngModel)]="value"
      ngx-colors-trigger
      [hideTextInput]="true"
      [hideColorPicker]="true"
    ></ngx-colors>
  </div>
  `,
})
export class ColorCellComponent {
  @Input() value!: string;
}
