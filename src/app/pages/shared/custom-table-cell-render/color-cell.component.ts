import { Component, Input } from "@angular/core";

@Component({
  template: `<nb-icon
    [ngStyle]="{ color: value }"
    icon="color-palette"
  ></nb-icon>`,
})
export class ColorCellComponent {
  @Input() value;
}
