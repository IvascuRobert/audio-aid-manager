import { Component, Input, OnInit } from "@angular/core";
import * as moment from "moment";

import { ViewCell } from "ng2-smart-table";

@Component({
  template: `<div class="d-flex justify-content-center">
    <button nbButton ghost status="basic" [nbContextMenu]="items">
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
  renderValue: any;

  @Input() value;
  @Input() rowData: any;
  items = [
    { title: "View", icon: "eye-outline" },
    { title: "Edit", icon: "edit-2-outline" },
    { title: "Remove", icon: "trash-2-outline" },
  ];

  ngOnInit() {
    this.renderValue = moment().diff(this.value, "years");
  }
}
