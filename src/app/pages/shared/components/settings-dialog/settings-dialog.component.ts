import { Component, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  getItem,
} from '../../../../@core/utils/save-local-storage';
import { BaseForm } from '../../directives/base-form.directive';

@Component({
  selector: 'ngx-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent extends BaseForm implements OnInit {
  settingsForm = this.fb.group({
    columns: this.fb.control<string[] | null>(null, []),
  });

  @Input() hiddenColumns: string[] = [];

  @Input() localStorageSettingsKey!: LOCAL_STORAGE_KEYS_FOR_TABLE;

  loadingLargeGroup = false;

  get columnsControl() {
    return this.settingsForm.controls.columns;
  }

  constructor(
    @Optional() private ref: NbDialogRef<SettingsDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

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

  private loadSelectColumnsFromLocalStorage() {
    const columns = getItem(this.localStorageSettingsKey);
    this.settingsForm.controls.columns.setValue(columns);
  }
}
