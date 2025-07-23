import {
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import {
  NbButtonModule,
  NbContextMenuModule,
  NbIconModule,
  NbMenuService,
} from '@nebular/theme';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, tap } from 'rxjs/operators';
import { Action } from '../../../@core/data/actions';

@Component({
  standalone: true,
  imports: [NbContextMenuModule, NbIconModule, NbButtonModule],
  template: `<div class="d-flex justify-content-center">
    <button
      nbButton
      ghost
      status="basic"
      [nbContextMenu]="items"
      [nbContextMenuTag]="contextTag + rowData.id"
    >
      <nb-icon
        class="skip"
        icon="more-vertical-outline"
        pack="eva"
        [options]="{ animation: { type: 'pulse' } }"
      ></nb-icon>
    </button>
  </div>`,
})
export class ActionsCellComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  @Input() value: any;

  @Input() rowData: any;

  @Input() items = [
    { title: Action.Edit, icon: 'edit-2-outline' },
    { title: Action.Delete, icon: 'trash-2-outline' },
    { title: Action.EndProcess, icon: 'stop-circle-outline' },
  ];

  @Output() actionChange =
    new EventEmitter<{ action: Action; row: any }>();

  readonly contextTag = 'actions-context-menu-';

  constructor(private nbMenuService: NbMenuService) {}

  ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === this.contextTag + this.value.id),
        takeUntilDestroyed(this.destroyRef),
        tap((res) => {
          this.actionChange.emit({
            action: res.item.title as Action,
            row: this.value,
          });
        }),
      )
      .subscribe();
  }
}
