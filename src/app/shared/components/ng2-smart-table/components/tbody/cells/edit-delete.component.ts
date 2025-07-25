import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
import { Grid } from '../../../lib/grid';

@Component({
  selector: 'ng2-st-tbody-edit-delete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  template: `
    @if (isActionEdit) {
      <a
        href="#"
        class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="editRowButtonContent"
        (click)="onEdit($event)"
      ></a>
    }
    @if (isActionDelete) {
      <a
        href="#"
        class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="deleteRowButtonContent"
        (click)="onDelete($event)"
      ></a>
    }
  `,
})
export class TbodyEditDeleteComponent implements OnChanges {
  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() source!: DataSource;
  @Input() deleteConfirm!: EventEmitter<any>;
  @Input() editConfirm!: EventEmitter<any>;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() editRowSelect = new EventEmitter<any>();

  isActionEdit!: boolean;
  isActionDelete!: boolean;
  editRowButtonContent!: string;
  deleteRowButtonContent!: string;

  onEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.editRowSelect.emit(this.row);

    if (this.grid.getSetting('mode') === 'external') {
      this.edit.emit({
        data: this.row.getData(),
        source: this.source,
      });
    } else {
      this.grid.edit(this.row);
    }
  }

  onDelete(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.delete.emit({
        data: this.row.getData(),
        source: this.source,
      });
    } else {
      this.grid.delete(this.row, this.deleteConfirm);
    }
  }

  ngOnChanges() {
    this.isActionEdit = this.grid.getSetting('actions.edit');
    this.isActionDelete = this.grid.getSetting('actions.delete');
    this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
    this.deleteRowButtonContent = this.grid.getSetting(
      'delete.deleteButtonContent',
    );
  }
}
