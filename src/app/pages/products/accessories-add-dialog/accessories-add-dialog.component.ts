import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-accessories-add-dialog',
  templateUrl: './accessories-add-dialog.component.html',
  styleUrls: ['./accessories-add-dialog.component.scss'],
})
export class AccessoriesAddDialogComponent extends BaseForm {
  accessoriesAddForm = this.fb.group({
    id: [null],
    group: ['', [Validators.required]],
    serialNumber: ['', [Validators.required]],
    name: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    type: ['', [Validators.required]],
    price: ['', [Validators.required]],
    location: ['', [Validators.required]],
    customer: ['', [Validators.required]],
  });

  loadingLargeGroup = false;

  get groupControl() {
    return this.accessoriesAddForm.controls.group;
  }

  get serialNumberControl() {
    return this.accessoriesAddForm.controls.serialNumber;
  }

  get nameControl() {
    return this.accessoriesAddForm.controls.name;
  }

  get brandControl() {
    return this.accessoriesAddForm.controls.brand;
  }

  get typeControl() {
    return this.accessoriesAddForm.controls.type;
  }

  get priceControl() {
    return this.accessoriesAddForm.controls.price;
  }

  get locationControl() {
    return this.accessoriesAddForm.controls.location;
  }

  get customerControl() {
    return this.accessoriesAddForm.controls.customer;
  }

  constructor(
    @Optional() private ref: NbDialogRef<AccessoriesAddDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log('here');
    this.accessoriesAddForm.markAsDirty();
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
