import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Entity } from '../../../../@core/data/entity';

@UntilDestroy()
@Component({
  selector: 'ngx-custom-actions',
  templateUrl: './custom-actions.component.html',
  styleUrls: ['./custom-actions.component.scss'],
})
export class CustomActionsComponent {
  @Input() selectedRows: any = [];

  @Input() entity!: Entity;

  @Input() showProcess = false;

  @Input() showOrder = false;

  @Output() handleAddAction = new EventEmitter<boolean>();

  @Output() handleEditAction = new EventEmitter<boolean>();

  @Output() handleRemoveAction = new EventEmitter<boolean>();

  @Output() handleReloadAction = new EventEmitter<boolean>();

  @Output() handleSettingsAction = new EventEmitter<boolean>();

  @Output() handlePulseAction = new EventEmitter<boolean>();

  @Output() handleOrderAction = new EventEmitter<boolean>();
}
