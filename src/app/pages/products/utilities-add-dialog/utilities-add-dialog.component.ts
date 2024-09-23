import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-utilities-add-dialog',
  templateUrl: './utilities-add-dialog.component.html',
  styleUrls: ['./utilities-add-dialog.component.scss'],
})
export class UtilitiesAddDialogComponent extends BaseForm {
  utilitiesAddForm = this.fb.group({
    id: [null],
    type: ['', [Validators.required]],
    name: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    price: ['', [Validators.required]],
    location: ['', [Validators.required]],
  });

  loadingLargeGroup = false;

  get typeControl() {
    return this.utilitiesAddForm.controls.type;
  }

  get nameControl() {
    return this.utilitiesAddForm.controls.name;
  }

  get brandControl() {
    return this.utilitiesAddForm.controls.brand;
  }

  get quantityControl() {
    return this.utilitiesAddForm.controls.quantity;
  }

  get priceControl() {
    return this.utilitiesAddForm.controls.price;
  }

  get locationControl() {
    return this.utilitiesAddForm.controls.location;
  }

  constructor(
    @Optional() private ref: NbDialogRef<UtilitiesAddDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log('here');
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
}
