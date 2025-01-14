import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';

@Component({
  standalone: true,
  imports: [NgxColorsModule, FormsModule],
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
