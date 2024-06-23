import { Component, Input } from "@angular/core";

import { Role } from "../../../../@core/data/role";

@Component({
  template: ` <nb-tag-list [ngSwitch]="value">
      <nb-tag
        *ngSwitchCase="roleStatusTpl.admin"
        status="warning"
        class="text-uppercase"
        appearance="outline"
        [nbPopover]="adminRef"
        nbPopoverTrigger="hint"
        [nbPopoverContext]="{value}"
        [text]="value"
        [size]="'tiny'"
      ></nb-tag>
      <nb-tag
        *ngSwitchCase="roleStatusTpl.employee"
        status="primary"
        class="text-uppercase"
        appearance="outline"
        [nbPopover]="employeeRef"
        nbPopoverTrigger="hint"
        [nbPopoverContext]="{value}"
        [text]="value"
        [size]="'tiny'"
      ></nb-tag>
    </nb-tag-list>

    <ng-template #adminRef let-passdata>
      <nb-card class="popover-card" accent="basic">
        <nb-card-header status="warning">
          Hello! {{ passdata.value }}
        </nb-card-header>
        <nb-card-body>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </nb-card-body>
      </nb-card>
    </ng-template>

    <ng-template #employeeRef let-passdata>
      <nb-card class="popover-card" accent="basic">
        <nb-card-header status="warning">
          Hello! {{ passdata.value }}
        </nb-card-header>
        <nb-card-body>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </nb-card-body>
      </nb-card>
    </ng-template>`,
  styles: [
    `
      nb-card {
        margin: 0;
        max-width: 20rem;
      }
    `,
  ],
})
export class RoleCellComponent {
  @Input() value;

  readonly roleStatusTpl = Role;
}
