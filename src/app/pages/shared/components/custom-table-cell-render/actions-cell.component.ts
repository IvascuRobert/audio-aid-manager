import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ViewCell } from 'ng2-smart-table';
import { filter, tap } from 'rxjs/operators';
import { Action } from '../../../../@core/data/actions';

@UntilDestroy()
@Component({
  template: `<div class="d-flex justify-content-center">
    <button nbButton ghost status="basic" [nbContextMenu]="items" [nbContextMenuTag]="contextTag+rowData.id">
      <nb-icon
        class="skip"
        icon="more-vertical-outline"
        pack="eva"
        [options]="{ animation: { type: 'pulse' } }"
      ></nb-icon>
    </button>
  </div>`,
})
export class ActionsCellComponent implements ViewCell, OnInit {
  @Input() value: any;

  @Input() rowData: any;

  @Input() items = [
    { title: Action.Edit, icon: 'edit-2-outline' },
    { title: Action.Delete, icon: 'trash-2-outline' },
    { title: Action.EndProcess, icon: 'stop-circle-outline' },
  ];

  @Output() actionChange: EventEmitter<{ action: Action; row: any }> =
    new EventEmitter();

  readonly contextTag = 'actions-context-menu-';

  constructor(private nbMenuService: NbMenuService) {}

  ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === this.contextTag + this.value.id),
        untilDestroyed(this),
        tap((res) => {
          this.actionChange.emit({
            action: res.item.title as Action,
            row: this.value,
          });
        })
      )
      .subscribe();
  }
}
