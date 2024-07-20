import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-devices-add-dialog',
  templateUrl: './devices-add-dialog.component.html',
  styleUrls: ['./devices-add-dialog.component.scss']
})
export class DevicesAddDialogComponent {
  devicesAddForm = this.fb.group({
    id: [null],
    group: ["", [Validators.required]],
    brand: ["", [Validators.required]],
    name: ["", [Validators.required]],
    serialNumber: ["", [Validators.required]],
    type: ["", [Validators.required]],
    battery: ["", [Validators.required]],
    qualityLevel: ["", [Validators.required]],
    color: ["", [Validators.required]],
    aslGroup: ["", [Validators.required]],
    price: ["", [Validators.required]],
    location: ["", [Validators.required]],
    customer: ["", [Validators.required]],
  });

  loadingLargeGroup = false;

  constructor(
    @Optional() private ref: NbDialogRef<DevicesAddDialogComponent>,
    private fb: FormBuilder
  ) { }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log("here");
    this.devicesAddForm.markAsDirty();
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
      this.devicesAddForm.controls[controlName].invalid &&
      (this.devicesAddForm.controls[controlName].dirty ||
        this.devicesAddForm.controls[controlName].touched)
    );
  }
}
