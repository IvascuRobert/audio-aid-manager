import { Component } from '@angular/core';

import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DefaultEditor } from './default-editor';

@Component({
  selector: 'select-editor',
  standalone: true,
  imports: [NgClass, FormsModule],
  template: `
    <select
      [ngClass]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getId()"
      [disabled]="!cell.isEditable()"
      (click)="onClick.emit($event)"
      (keydown.enter)="onEdited.emit($event)"
      (keydown.esc)="onStopEditing.emit()"
    >
      @for (option of cell.getColumn().getConfig()?.list; track option.value) {
        <option
          [value]="option.value"
          [selected]="option.value === cell.getValue()"
        >
          {{ option.title }}
        </option>
      }
    </select>
  `,
})
export class SelectEditorComponent extends DefaultEditor {
  constructor() {
    super();
  }
}
