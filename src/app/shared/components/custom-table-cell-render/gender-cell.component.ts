import { Component, Input } from '@angular/core';
import { NbIconModule, NbPopoverModule } from '@nebular/theme';
import { Gender } from '../../../@core/data/customer';

@Component({
  standalone: true,
  imports: [NbIconModule, NbPopoverModule],
  template: `<div class="d-flex justify-content-center">
    @switch (value) {
      @case (genderTpl.female) {
        <nb-icon
          nbPopoverTrigger="hint"
          [nbPopover]="value"
          icon="venus"
          pack="fa"
        ></nb-icon>
      }
      @case (genderTpl.male) {
        <nb-icon
          nbPopoverTrigger="hint"
          [nbPopover]="value"
          icon="mars"
          pack="fa"
        ></nb-icon>
      }
      @case (genderTpl.unknown) {
        <nb-icon
          nbPopoverTrigger="hint"
          [nbPopover]="value"
          icon="neuter"
          pack="fa"
        ></nb-icon>
      }
    }
  </div>`,
})
export class GenderCellComponent {
  @Input() value!: Gender;

  readonly genderTpl = Gender;
}
