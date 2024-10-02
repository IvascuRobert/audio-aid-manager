import { Component, OnInit, Optional } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import {
  Customer,
  CustomerContactNoteType,
  CustomerForm,
  Gender,
} from '../../../@core/data/customer';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-customer-add-dialog',
  templateUrl: './customer-add-dialog.component.html',
  styleUrls: ['./customer-add-dialog.component.scss'],
})
export class CustomerAddDialogComponent extends BaseForm implements OnInit {
  customerAddForm = new FormGroup<CustomerForm>({
    id: new FormControl(0, { nonNullable: true }),
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    address: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    age: new FormControl(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    appointment: new FormControl(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    clinic: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    contactNote: new FormControl(CustomerContactNoteType.commercial, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    doctor: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    gender: new FormControl(Gender.male, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    location: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    telephone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  loadingLargeGroup = false;

  selectedCustomer: Customer | null = null;

  get firstNameControl() {
    return this.customerAddForm.controls.firstName;
  }

  get lastNameControl() {
    return this.customerAddForm.controls.lastName;
  }

  get emailControl() {
    return this.customerAddForm.controls.email;
  }

  get ageControl() {
    return this.customerAddForm.controls.age;
  }

  get telephoneControl() {
    return this.customerAddForm.controls.telephone;
  }

  get doctorControl() {
    return this.customerAddForm.controls.doctor;
  }

  get addressControl() {
    return this.customerAddForm.controls.address;
  }

  get clinicControl() {
    return this.customerAddForm.controls.clinic;
  }

  get locationControl() {
    return this.customerAddForm.controls.location;
  }

  get contactNoteControl() {
    return this.customerAddForm.controls.contactNote;
  }

  get appointmentControl() {
    return this.customerAddForm.controls.appointment;
  }

  get genderControl() {
    return this.customerAddForm.controls.gender;
  }

  constructor(
    @Optional() private ref: NbDialogRef<CustomerAddDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.customerAddForm.patchValue(this.selectedCustomer as any);
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
}
