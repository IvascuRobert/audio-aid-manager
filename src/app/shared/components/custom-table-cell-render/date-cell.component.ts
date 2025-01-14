import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  template: `<span [ngClass]="{ 'text-warning': false }">
    {{ renderValue }}
  </span>`,
})
export class DateCellComponent implements OnInit {
  renderValue: any;

  isInPresent = false;

  @Input() value!: Date;

  ngOnInit() {
    this.renderValue = this.value;
    // this.renderValue = moment(this.value).format('L');
    // this.isInPresent = moment().isSame(moment(this.value), 'day');
  }
}
