import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
  template: '',
  standalone: true,
})
export class EditCellDefault {
  @Input() cell!: Cell;
  @Input() inputClass = '';

  @Output() edited = new EventEmitter<any>();

  onEdited(event: any): boolean {
    this.edited.next(event);
    return false;
  }

  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    return false;
  }

  onClick(event: any) {
    event.stopPropagation();
  }
}
