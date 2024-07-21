import { Component, Input } from "@angular/core";
import { Gender } from "../../../../@core/data/customer";

@Component({
  template: `<div class="d-flex justify-content-center">
    <nb-icon
      nbPopoverTrigger="hint"
      [nbPopover]="value"
      [icon]="value === genderTpl.unknown ? 'transgender' : value"
      pack="ion"
    ></nb-icon>
  </div>`,
})
export class GenderCellComponent {
  @Input() value: Gender;

  readonly genderTpl = Gender;
}
