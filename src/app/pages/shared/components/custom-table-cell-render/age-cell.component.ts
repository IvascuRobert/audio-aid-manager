import { Component, Input, OnInit } from "@angular/core";
import * as moment from "moment";

import { ViewCell } from "ng2-smart-table";

@Component({
  template: `{{ renderValue }}`,
})
export class AgeCellComponent implements ViewCell, OnInit {
  renderValue: any;

  @Input() value;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = moment().diff(this.value, "years");
  }
}
