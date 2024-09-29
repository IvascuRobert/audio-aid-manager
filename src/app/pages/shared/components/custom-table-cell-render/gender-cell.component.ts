import { Component, Input } from '@angular/core';
import { Gender } from '../../../../@core/data/customer';

@Component({
  template: `<div class="d-flex justify-content-center">
    <ng-container [ngSwitch]="value">
    <nb-icon
      *ngSwitchCase="genderTpl.female"
      nbPopoverTrigger="hint"
      [nbPopover]="value"
      icon="female"
      pack="ion"
    ></nb-icon>
    <nb-icon
      *ngSwitchCase="genderTpl.male"
      nbPopoverTrigger="hint"
      [nbPopover]="value"
      icon="male"
      pack="ion"
    ></nb-icon>
    <nb-icon
      *ngSwitchCase="genderTpl.unknown"
      nbPopoverTrigger="hint"
      [nbPopover]="value"
      icon="unknown"
      pack="ion"
    ></nb-icon>
    </ng-container>
  </div>`,
})
export class GenderCellComponent {
  @Input() value!: Gender;

  readonly genderTpl = Gender;
}
