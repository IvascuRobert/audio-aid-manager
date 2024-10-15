import { Component, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import {
  ProcessEndReason,
  ProcessForm,
  UserHasDeviceType,
} from '../../../@core/data/process';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-customer-details-add-dialog',
  templateUrl: './customer-details-add-dialog.component.html',
  styleUrls: ['./customer-details-add-dialog.component.scss'],
})
export class CustomerDetailsAddDialogComponent extends BaseForm {
  form = new FormGroup<ProcessForm>({
    id: new FormControl(0, { nonNullable: true }),
    comment: new FormControl('', { nonNullable: true }),
    leftEarDevice: new FormControl(UserHasDeviceType.none, {
      nonNullable: true,
    }),
    leftEarValue: new FormControl(0, { nonNullable: true }),
    questionnaire: new FormControl(0, { nonNullable: true }),
    reason: new FormControl(ProcessEndReason.style, { nonNullable: true }),
    rightEarDevice: new FormControl(UserHasDeviceType.none, {
      nonNullable: true,
    }),
    rightEarValue: new FormControl(0, { nonNullable: true }),
  });

  loadingLargeGroup = false;

  get leftEarValueControl() {
    return this.form.controls.leftEarValue;
  }

  get leftEarDeviceControl() {
    return this.form.controls.leftEarDevice;
  }

  get rightEarValueControl() {
    return this.form.controls.rightEarValue;
  }

  get rightEarDeviceControl() {
    return this.form.controls.rightEarDevice;
  }

  get questionnaireControl() {
    return this.form.controls.questionnaire;
  }

  get reasonControl() {
    return this.form.controls.reason;
  }

  get commentControl() {
    return this.form.controls.comment;
  }

  constructor(
    @Optional() private ref: NbDialogRef<CustomerDetailsAddDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    this.form.markAsDirty();
    // this.ref.close(value);
  }

  toggleLoadingLargeGroupAnimation() {
    this.loadingLargeGroup = true;

    setTimeout(() => {
      this.loadingLargeGroup = false;
      this.ref.close();
    }, 3000);
  }
}
