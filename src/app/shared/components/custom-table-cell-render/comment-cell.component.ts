import { Component, Input } from '@angular/core';
import { NbCardModule, NbIconModule, NbPopoverModule } from '@nebular/theme';

@Component({
  standalone: true,
  imports: [NbIconModule, NbPopoverModule, NbCardModule],
  template: `<div class="d-flex justify-content-center">
      <nb-icon
        status="basic"
        class="skip"
        icon="file-text-outline"
        pack="eva"
        [options]="{ animation: { type: 'pulse' } }"
        [nbPopover]="commentRef"
        nbPopoverTrigger="hint"
        [nbPopoverContext]="{value}"
      ></nb-icon>
    </div>

    <ng-template #commentRef let-data>
      <nb-card class="popover-card" accent="basic">
        <nb-card-header status="warning"> Note </nb-card-header>
        <nb-card-body>
          {{ data.value }}
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
export class CommentCellComponent {
  @Input() value!: string;
}
