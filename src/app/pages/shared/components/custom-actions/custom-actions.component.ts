import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { RemoveDialogComponent } from "../remove-dialog/remove-dialog.component";

@Component({
  selector: "ngx-custom-actions",
  templateUrl: "./custom-actions.component.html",
  styleUrls: ["./custom-actions.component.scss"],
})
export class CustomActionsComponent {
  @Input() selectedRows = [];
  @Input() actions = [];

  @Output() handleAddAction = new EventEmitter<boolean>();
  @Output() handleRemoveAction = new EventEmitter<boolean>();
  @Output() handleReloadAction = new EventEmitter<boolean>();
  @Output() handleSettingsAction = new EventEmitter<boolean>();

  constructor(private dialogService: NbDialogService) { }

  removeDialog() {
    if (this.selectedRows.length > 0) {
      this.dialogService
        .open(RemoveDialogComponent)
        .onClose.subscribe((remove) => {
          if (remove) {
            this.handleRemoveAction.emit(true);
          }
        });
    }
  }
}
