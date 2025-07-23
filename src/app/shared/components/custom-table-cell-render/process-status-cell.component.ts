import { Component, Input } from '@angular/core';
import { NbCardModule, NbPopoverModule, NbTagModule } from '@nebular/theme';
import { ProcessStatusType } from '../../../@core/data/customer';

@Component({
  standalone: true,
  imports: [NbTagModule, NbPopoverModule, NbCardModule],
  template: `
    <nb-tag-list>
      @switch (value) {
        @case (processStatusTypeTpl.open) {
          <nb-tag
            status="warning"
            class="text-uppercase"
            [size]="'tiny'"
            [nbPopover]="ccRef"
            nbPopoverTrigger="hint"
            [nbPopoverContext]="{ value }"
            [text]="value"
          ></nb-tag>
        }
        @case (processStatusTypeTpl.end) {
          <nb-tag
            status="basic"
            class="text-uppercase"
            [size]="'tiny'"
            [nbPopover]="clRef"
            nbPopoverTrigger="hint"
            [nbPopoverContext]="{ value }"
            [text]="value"
          ></nb-tag>
        }
        @case (processStatusTypeTpl.lost) {
          <nb-tag
            status="danger"
            class="text-uppercase"
            [size]="'tiny'"
            [nbPopover]="noRef"
            nbPopoverTrigger="hint"
            [nbPopoverContext]="{ value }"
            [text]="value"
          ></nb-tag>
        }
        @case (processStatusTypeTpl.trial) {
          <nb-tag
            status="primary"
            class="text-uppercase"
            [size]="'tiny'"
            [nbPopover]="pcRef"
            nbPopoverTrigger="hint"
            [nbPopoverContext]="{ value }"
            [text]="value"
          ></nb-tag>
        }
        @case (processStatusTypeTpl.win) {
          <nb-tag
            status="success"
            class="text-uppercase"
            [size]="'tiny'"
            [nbPopover]="pcRef"
            nbPopoverTrigger="hint"
            [nbPopoverContext]="{ value }"
            [text]="value"
          ></nb-tag>
        }
      }
    </nb-tag-list>

    <ng-template #ccRef let-passdata>
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

    <ng-template #clRef let-passdata>
      <nb-card class="popover-card" accent="primary">
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

    <ng-template #noRef let-passdata>
      <nb-card class="popover-card" accent="success">
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

    <ng-template #pcRef let-passdata>
      <nb-card class="popover-card" accent="warning">
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

    <ng-template #defaultRef let-passdata>
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
  `,
  styles: [
    `
      nb-card {
        margin: 0;
        max-width: 20rem;
      }
    `,
  ],
})
export class ProcessStatusCellComponent {
  @Input() value!: ProcessStatusType;

  readonly processStatusTypeTpl = ProcessStatusType;
}
