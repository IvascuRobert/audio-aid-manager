import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbActionsModule, NbTooltipModule } from '@nebular/theme';
import { Entity } from '../../../@core/data/entity';

export interface CustomAction {
  showSettings: boolean;
  showProcess: boolean;
  showOrder: boolean;
}

@Component({
  selector: 'app-custom-actions',
  standalone: true,
  imports: [NbActionsModule, NbTooltipModule, JsonPipe],
  templateUrl: './custom-actions.component.html',
  styleUrls: ['./custom-actions.component.scss'],
})
export class CustomActionsComponent {
  @Input() selectedRows: any = [];

  @Input() entity!: Entity;

  @Input() showAction: CustomAction = {
    showSettings: false,
    showProcess: false,
    showOrder: false,
  };

  @Output() handleAddAction = new EventEmitter<boolean>();

  @Output() handleEditAction = new EventEmitter<boolean>();

  @Output() handleRemoveAction = new EventEmitter<boolean>();

  @Output() handleReloadAction = new EventEmitter<boolean>();

  @Output() handleSettingsAction = new EventEmitter<boolean>();

  @Output() handlePulseAction = new EventEmitter<boolean>();

  @Output() handleOrderAction = new EventEmitter<boolean>();
}
