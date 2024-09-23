import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-devices-add-dialog',
  templateUrl: './devices-add-dialog.component.html',
  styleUrls: ['./devices-add-dialog.component.scss'],
})
export class DevicesAddDialogComponent extends BaseForm {
  devicesAddForm = this.fb.group({
    id: [null],
    group: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    name: ['', [Validators.required]],
    serialNumber: ['', [Validators.required]],
    type: ['', [Validators.required]],
    battery: ['', [Validators.required]],
    qualityLevel: ['', [Validators.required]],
    color: ['', [Validators.required]],
    aslGroup: ['', [Validators.required]],
    price: ['', [Validators.required]],
    location: ['', [Validators.required]],
    customer: ['', [Validators.required]],
  });

  loadingLargeGroup = false;

  get groupControl() {
    return this.devicesAddForm.controls.group;
  }

  get brandControl() {
    return this.devicesAddForm.controls.brand;
  }

  get nameControl() {
    return this.devicesAddForm.controls.name;
  }

  get serialNumberControl() {
    return this.devicesAddForm.controls.serialNumber;
  }

  get typeControl() {
    return this.devicesAddForm.controls.type;
  }

  get batteryControl() {
    return this.devicesAddForm.controls.battery;
  }

  get qualityLevelControl() {
    return this.devicesAddForm.controls.qualityLevel;
  }

  get colorControl() {
    return this.devicesAddForm.controls.color;
  }

  get aslGroupControl() {
    return this.devicesAddForm.controls.aslGroup;
  }

  get priceControl() {
    return this.devicesAddForm.controls.price;
  }

  get locationControl() {
    return this.devicesAddForm.controls.location;
  }

  get customerControl() {
    return this.devicesAddForm.controls.customer;
  }
  constructor(
    @Optional() private ref: NbDialogRef<DevicesAddDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log('here');
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
}
