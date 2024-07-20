import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NbDialogService, NbMenuService } from "@nebular/theme";
import * as moment from "moment";

import { ViewCell } from "ng2-smart-table";
import { RemoveDialogComponent } from "../remove-dialog/remove-dialog.component";
import { distinctUntilChanged, filter, first, map } from "rxjs/operators";
import { Action } from "../../../../@core/data/actions";


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
  @Input() value;
  @Input() rowData: any;
  @Output() actionChange: EventEmitter<{ action: Action, row: any }> = new EventEmitter();

  items = [
    { title: Action.View, icon: "eye-outline" },
    { title: Action.Edit, icon: "edit-2-outline" },
    { title: Action.Delete, icon: "trash-2-outline" },
  ];

  contextTag = 'actions-context-menu-'


  constructor(private dialogService: NbDialogService, private nbMenuService: NbMenuService) { }

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === this.contextTag + this.value.id),
      )
      .subscribe((res) => {
        if (res.item.title as Action === Action.Delete) {
          this.removeDialog();
        } else {
          this.actionChange.emit({ action: res.item.title as Action, row: this.value })
        }
      });
  }

  removeDialog() {
    this.dialogService
      .open(RemoveDialogComponent)
      .onClose.subscribe((remove) => {
        if (remove) {
          this.actionChange.emit({ action: Action.Delete, row: this.value })
        }
      });
  }
}
