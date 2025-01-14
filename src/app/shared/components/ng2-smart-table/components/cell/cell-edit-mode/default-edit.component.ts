import { Component } from '@angular/core';

import { CheckboxEditorComponent } from '../cell-editors/checkbox-editor.component';
import { InputEditorComponent } from '../cell-editors/input-editor.component';
import { SelectEditorComponent } from '../cell-editors/select-editor.component';
import { TextareaEditorComponent } from '../cell-editors/textarea-editor.component';
import { EditCellDefault } from './edit-cell-default';

@Component({
  selector: 'table-cell-default-editor',
  templateUrl: './default-edit.component.html',
  standalone: true,
  imports: [
    SelectEditorComponent,
    TextareaEditorComponent,
    CheckboxEditorComponent,
    InputEditorComponent,
  ],
})
export class DefaultEditComponent extends EditCellDefault {
  constructor() {
    super();
  }

  getEditorType(): string {
    return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
  }
}
