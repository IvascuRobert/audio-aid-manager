import { NgFor } from '@angular/common';
import { Component, Input, OnInit, Optional } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogRef,
  NbIconModule,
  NbSelectModule,
} from '@nebular/theme';
import { SettingsForm } from '../../../@core/data/settings';
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  getItem,
} from '../../../@core/utils/save-local-storage';
import { BaseForm } from '../../directives/base-form.directive';

@Component({
  selector: 'app-settings-dialog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbIconModule,
    NbSelectModule,
    NbButtonModule,
    NgFor,
  ],
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

  constructor(@Optional() private ref: NbDialogRef<SettingsDialogComponent>) {
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
