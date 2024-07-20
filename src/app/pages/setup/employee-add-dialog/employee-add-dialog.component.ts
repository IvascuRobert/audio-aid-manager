import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-employee-add-dialog',
  templateUrl: './employee-add-dialog.component.html',
  styleUrls: ['./employee-add-dialog.component.scss']
})
export class EmployeeAddDialogComponent {
  employeeAddForm = this.fb.group({
    id: [null],
    email: ["", [Validators.required]],
    gender: ["", [Validators.required]],
    name: ["", [Validators.required]],
    password: ["", [Validators.required]],
    role: ["", [Validators.required]],
  });

  loadingLargeGroup = false;

  constructor(
    @Optional() private ref: NbDialogRef<EmployeeAddDialogComponent>,
    private fb: FormBuilder
  ) { }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log("here");
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


  isValid(controlName: string): boolean {
    return (
      this.employeeAddForm.controls[controlName].invalid &&
      (this.employeeAddForm.controls[controlName].dirty ||
        this.employeeAddForm.controls[controlName].touched)
    );
  }
}
