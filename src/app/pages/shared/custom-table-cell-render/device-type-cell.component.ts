import { Component, Input, OnInit } from "@angular/core";

import { ViewCell } from "ng2-smart-table";

@Component({
  template: `
    <nb-tag-list>
      <nb-tag status="basic" appearance="filled" text="basic"></nb-tag>
      <nb-tag status="primary" appearance="filled" text="primary"></nb-tag>
      <nb-tag status="success" appearance="filled" text="success"></nb-tag>
      <nb-tag status="info" appearance="filled" text="info"></nb-tag>
      <nb-tag status="warning" appearance="filled" text="warning"></nb-tag>
      <nb-tag status="danger" appearance="filled" text="danger"></nb-tag>
    </nb-tag-list>
  `,
})
export class DeviceTypeCellComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }
}
// <span class="badge text-bg-primary">Primary</span>
//   {{renderValue + 'cacat'}}
