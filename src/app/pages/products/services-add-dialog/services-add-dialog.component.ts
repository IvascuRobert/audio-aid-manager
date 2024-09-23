import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-services-add-dialog',
  templateUrl: './services-add-dialog.component.html',
  styleUrls: ['./services-add-dialog.component.scss'],
})
export class ServicesAddDialogComponent extends BaseForm {
  servicesAddForm = this.fb.group({
    id: [null],
    price: ['', [Validators.required]],
    name: ['', [Validators.required]],
  });

  loadingLargeGroup = false;

  get nameControl() {
    return this.servicesAddForm.controls.name;
  }

  get priceControl() {
    return this.servicesAddForm.controls.price;
  }

  constructor(
    @Optional() private ref: NbDialogRef<ServicesAddDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log('here');
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
}
