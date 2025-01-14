import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  template: `{{ renderValue }}`,
})
export class AgeCellComponent implements OnInit {
  @Input() value!: string;

  @Input() rowData: any;

  renderValue: any;

  ngOnInit() {
    // this.renderValue = moment().diff(this.value, 'years');
    this.renderValue = this.value;
  }
}
