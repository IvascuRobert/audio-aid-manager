import { Component, Input, OnInit, Optional } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  getItem,
} from "../../../../@core/utils/save-local-storage";

@Component({
  selector: "ngx-settings-dialog",
  templateUrl: "./settings-dialog.component.html",
  styleUrls: ["./settings-dialog.component.scss"],
})
export class SettingsDialogComponent implements OnInit {
  settingsForm = this.fb.group({
    columns: [null],
  });

  @Input() hiddenColumns: string[] = [];

  @Input() localStorageSettingsKey: LOCAL_STORAGE_KEYS_FOR_TABLE;

  loadingLargeGroup = false;

  constructor(
    @Optional() private ref: NbDialogRef<SettingsDialogComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadSelectColumnsFromLocalStorage();
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    this.loadingLargeGroup = true;

    setTimeout(() => {
      const settingsFormValue = this.settingsForm.getRawValue();
      this.loadingLargeGroup = false;
      this.ref.close({
        ...settingsFormValue,
        ...{ hiddenColumns: this.hiddenColumns },
      });
    }, 3000);
  }

  isValid(controlName: string): boolean {
    return (
      this.settingsForm.controls[controlName].invalid &&
      (this.settingsForm.controls[controlName].dirty ||
        this.settingsForm.controls[controlName].touched)
    );
  }

  private loadSelectColumnsFromLocalStorage() {
    const columns = getItem(this.localStorageSettingsKey);
    this.settingsForm.controls.columns.setValue(columns);
  }
}
