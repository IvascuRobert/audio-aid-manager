import { Component, Input, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  template: `<span [ngClass]="{ 'text-warning': !isInPresent }">
    {{ renderValue }}
  </span>`,
})
export class DateCellComponent implements OnInit {
  renderValue: any;
  isInPresent = false;

  @Input() value: Date;

  ngOnInit() {
    this.renderValue = moment(this.value).format("L");
    this.isInPresent = moment().isSame(moment(this.value), "day");
  }
}
