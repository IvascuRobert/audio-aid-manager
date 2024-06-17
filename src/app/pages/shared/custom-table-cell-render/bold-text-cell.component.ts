import { Component, Input } from "@angular/core";

@Component({
  template: `<strong>{{ value }}</strong>`,
})
export class BoldTextCellComponent {
  @Input() value;
}
