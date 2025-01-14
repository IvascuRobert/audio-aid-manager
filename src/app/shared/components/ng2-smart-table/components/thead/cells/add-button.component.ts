import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { DataSource } from '../../../lib/data-source/data-source';
import { Grid } from '../../../lib/grid';

@Component({
  selector: '[ng2-st-add-button]',
  standalone: true,
  template: `
    @if (isActionAdd) {
    <a
      href="#"
      class="ng2-smart-action ng2-smart-action-add-add"
      [innerHTML]="addNewButtonContent"
      (click)="onAdd($event)"
    ></a>
    }
  `,
})
export class AddButtonComponent implements AfterViewInit, OnChanges {
  @Input() grid!: Grid;
  @Input() source!: DataSource;
  @Output() create = new EventEmitter<any>();

  isActionAdd!: boolean;
  addNewButtonContent!: string;

  constructor(private ref: ElementRef) {}

  ngAfterViewInit() {
    this.ref.nativeElement.classList.add(
      'ng2-smart-actions-title',
      'ng2-smart-actions-title-add'
    );
  }

  ngOnChanges() {
    this.isActionAdd = this.grid.getSetting('actions.add');
    this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
  }

  onAdd(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (this.grid.getSetting('mode') === 'external') {
      this.create.emit({
        source: this.source,
      });
    } else {
      this.grid.createFormShown = true;
    }
  }
}
