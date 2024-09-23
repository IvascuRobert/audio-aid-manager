import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-customer-details-add-dialog',
  templateUrl: './customer-details-add-dialog.component.html',
  styleUrls: ['./customer-details-add-dialog.component.scss'],
})
export class CustomerDetailsAddDialogComponent extends BaseForm {
  customerAddForm = this.fb.group({
    id: [null],
    leftEarValue: ['', [Validators.required]],
    leftEarDevice: ['', [Validators.required]],
    rightEarValue: ['', [Validators.required]],
    rightEarDevice: ['', [Validators.required]],
    questionnaire: ['', [Validators.required]],
    reason: ['', [Validators.required]],
    comment: ['', [Validators.required]],
  });

  loadingLargeGroup = false;

  get leftEarValueControl() {
    return this.customerAddForm.controls.leftEarValue;
  }

  get leftEarDeviceControl() {
    return this.customerAddForm.controls.leftEarDevice;
  }

  get rightEarValueControl() {
    return this.customerAddForm.controls.rightEarValue;
  }

  get rightEarDeviceControl() {
    return this.customerAddForm.controls.rightEarDevice;
  }

  get questionnaireControl() {
    return this.customerAddForm.controls.questionnaire;
  }

  get reasonControl() {
    return this.customerAddForm.controls.reason;
  }

  get commentControl() {
    return this.customerAddForm.controls.comment;
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
    console.log('here');
    this.customerAddForm.markAsDirty();
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
