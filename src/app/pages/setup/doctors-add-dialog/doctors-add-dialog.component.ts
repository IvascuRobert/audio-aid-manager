import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-doctors-add-dialog',
  templateUrl: './doctors-add-dialog.component.html',
  styleUrls: ['./doctors-add-dialog.component.scss']
})
export class DoctorsAddDialogComponent {

  doctorsAddForm = this.fb.group({
    id: [null],
    name: ["", [Validators.required]],
  });

  loadingLargeGroup = false;

  constructor(
    @Optional() private ref: NbDialogRef<DoctorsAddDialogComponent>,
    private fb: FormBuilder
  ) { }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log("here");
    this.doctorsAddForm.markAsDirty();
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
      this.doctorsAddForm.controls[controlName].invalid &&
      (this.doctorsAddForm.controls[controlName].dirty ||
        this.doctorsAddForm.controls[controlName].touched)
    );
  }

}
