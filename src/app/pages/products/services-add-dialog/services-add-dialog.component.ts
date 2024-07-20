import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-services-add-dialog',
  templateUrl: './services-add-dialog.component.html',
  styleUrls: ['./services-add-dialog.component.scss']
})
export class ServicesAddDialogComponent {
  servicesAddForm = this.fb.group({
    id: [null],
    price: ["", [Validators.required]],
    name: ["", [Validators.required]],
  });

  loadingLargeGroup = false;

  constructor(
    @Optional() private ref: NbDialogRef<ServicesAddDialogComponent>,
    private fb: FormBuilder
  ) { }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log("here");
    this.servicesAddForm.markAsDirty();
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
      this.servicesAddForm.controls[controlName].invalid &&
      (this.servicesAddForm.controls[controlName].dirty ||
        this.servicesAddForm.controls[controlName].touched)
    );
  }
}
