import { Component, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { SettingsForm } from '../../../../@core/data/settings';
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
  form = new FormGroup<SettingsForm>({
    columns: new FormControl([], { nonNullable: true }),
  });

  @Input() hiddenColumns: string[] = [];

  @Input() localStorageSettingsKey!: LOCAL_STORAGE_KEYS_FOR_TABLE;

  get columnsControl() {
    return this.form.controls.columns;
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
    const settingsFormValue = this.form.getRawValue();
    this.ref.close({
      ...settingsFormValue,
      ...{ hiddenColumns: this.hiddenColumns },
    });
  }

  private loadSelectColumnsFromLocalStorage() {
    const columns = getItem(this.localStorageSettingsKey);
    this.form.controls.columns.setValue(columns);
  }
}
