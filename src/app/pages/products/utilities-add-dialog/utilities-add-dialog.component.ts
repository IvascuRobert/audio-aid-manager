import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-utilities-add-dialog',
  templateUrl: './utilities-add-dialog.component.html',
  styleUrls: ['./utilities-add-dialog.component.scss']
})
export class UtilitiesAddDialogComponent {
  utilitiesAddForm = this.fb.group({
    id: [null],
    type: ["", [Validators.required]],
    name: ["", [Validators.required]],
    brand: ["", [Validators.required]],
    quantity: ["", [Validators.required]],
    price: ["", [Validators.required]],
    location: ["", [Validators.required]],
  });

  loadingLargeGroup = false;

  constructor(
    @Optional() private ref: NbDialogRef<UtilitiesAddDialogComponent>,
    private fb: FormBuilder
  ) { }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log("here");
    this.utilitiesAddForm.markAsDirty();
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
      this.utilitiesAddForm.controls[controlName].invalid &&
      (this.utilitiesAddForm.controls[controlName].dirty ||
        this.utilitiesAddForm.controls[controlName].touched)
    );
  }

}
