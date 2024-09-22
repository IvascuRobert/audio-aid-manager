import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Customer } from '../../../@core/data/customer';
import { CoreService } from '../../../@core/services/core.service';
import { BaseTable } from '../../shared/directives/base-table.directive';

@Component({
  selector: 'ngx-customer-details-add-dialog',
  templateUrl: './customer-details-add-dialog.component.html',
  styleUrls: ['./customer-details-add-dialog.component.scss'],
})
export class CustomerDetailsAddDialogComponent extends BaseTable<Customer> {
  customerAddForm = this.fb.group({
    id: [null],
    leftEarValue: ['', [Validators.required]],
    leftEarDevice: ['', [Validators.required]],
    rightEarValue: ['', [Validators.required]],
    rightEarDevice: ['', [Validators.required]],
    questionnaire: ['', [Validators.required]],
    reason: ['', [Validators.required]],
    comment: ['', [Validators.required]],
  });

  loadingLargeGroup = false;

  constructor(
    @Optional() private ref: NbDialogRef<CustomerDetailsAddDialogComponent>,
    private fb: FormBuilder,
    dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log('here');
    this.customerAddForm.markAsDirty();
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
      this.customerAddForm.controls[controlName].invalid &&
      (this.customerAddForm.controls[controlName].dirty ||
        this.customerAddForm.controls[controlName].touched)
    );
  }
}
