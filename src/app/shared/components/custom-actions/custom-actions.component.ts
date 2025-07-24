import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { NbActionsModule, NbTooltipModule } from '@nebular/theme';
import { ProcessStatusType } from '../../../@core/data/customer';
import { Entity } from '../../../@core/data/entity';

export interface CustomAction {
  showProcess: boolean;
  showOrder: boolean;
  showEndProcess?: boolean;
}

@Component({
  selector: 'app-custom-actions',
  standalone: true,
  imports: [NbActionsModule, NbTooltipModule, JsonPipe],
  templateUrl: './custom-actions.component.html',
  styleUrls: ['./custom-actions.component.scss'],
})
export class CustomActionsComponent {
  loading = input<boolean>(false);

  @Input() selectedRows: any = [];

  @Input() entity!: Entity;

  @Input() showAction: CustomAction = {
    showProcess: false,
    showOrder: false,
    showEndProcess: false,
  };

  @Output() handleAddAction = new EventEmitter<boolean>();

  @Output() handleEditAction = new EventEmitter<boolean>();

  @Output() handleRemoveAction = new EventEmitter<boolean>();

  @Output() handleReloadAction = new EventEmitter<boolean>();

  @Output() handleSettingsAction = new EventEmitter<boolean>();

  @Output() handlePulseAction = new EventEmitter<boolean>();

  @Output() handleOrderAction = new EventEmitter<boolean>();

  @Output() handleOnEndProcess = new EventEmitter<boolean>();

  readonly processStatusTypeTpl = ProcessStatusType;

  onRemove(): void {
    if (this.selectedRows.length !== 0) {
      this.handleRemoveAction.emit(true);
    }
  }

  onProcess(): void {
    if (this.selectedRows.length === 1) {
      this.handlePulseAction.emit(true);
    }
  }

  onOrder(): void {
    if (
      this.selectedRows.length === 1 &&
      this.selectedRows[0].status == ProcessStatusType.open
    ) {
      this.handleOrderAction.emit(true);
    }
  }

  onEndProcess(): void {
    if (
      this.selectedRows.length === 1 &&
      this.selectedRows[0].status == ProcessStatusType.open
    ) {
      this.handleOnEndProcess.emit(true);
    }
  }
}
