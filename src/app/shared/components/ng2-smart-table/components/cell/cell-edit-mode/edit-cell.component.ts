import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';
import { CustomEditComponent } from './custom-edit.component';
import { DefaultEditComponent } from './default-edit.component';

@Component({
  selector: 'table-cell-edit-mode',
  standalone: true,
  imports: [DefaultEditComponent, CustomEditComponent],
  template: `
    @switch (getEditorType()) { @case ('custom') {

    <table-cell-custom-editor
      [cell]="cell"
      [inputClass]="inputClass"
      (edited)="onEdited($event)"
    >
    </table-cell-custom-editor>
    } @default {

    <table-cell-default-editor
      [cell]="cell"
      [inputClass]="inputClass"
      (edited)="onEdited($event)"
    >
    </table-cell-default-editor>
    } }
  `,
})
export class EditCellComponent {
  @Input() cell!: Cell;
  @Input() inputClass: string = '';

  @Output() edited = new EventEmitter<any>();

  onEdited(event: any): boolean {
    this.edited.next(event);
    return false;
  }

  getEditorType(): string {
    return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
  }
}
