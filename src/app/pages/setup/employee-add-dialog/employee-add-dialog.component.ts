import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-employee-add-dialog',
  templateUrl: './employee-add-dialog.component.html',
  styleUrls: ['./employee-add-dialog.component.scss'],
})
export class EmployeeAddDialogComponent extends BaseForm {
  employeeAddForm = this.fb.group({
    id: [null],
    email: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
    role: ['', [Validators.required]],
  });

  loadingLargeGroup = false;

  get emailControl() {
    return this.employeeAddForm.controls.email;
  }

  get nameControl() {
    return this.employeeAddForm.controls.name;
  }

  get passwordControl() {
    return this.employeeAddForm.controls.password;
  }

  get roleControl() {
    return this.employeeAddForm.controls.role;
  }

  get genderControl() {
    return this.employeeAddForm.controls.gender;
  }

  constructor(
    @Optional() private ref: NbDialogRef<EmployeeAddDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log('here');
    this.employeeAddForm.markAsDirty();
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
