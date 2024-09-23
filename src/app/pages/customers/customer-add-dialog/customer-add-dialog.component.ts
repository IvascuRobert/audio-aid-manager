import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Customer, Gender } from '../../../@core/data/customer';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-customer-add-dialog',
  templateUrl: './customer-add-dialog.component.html',
  styleUrls: ['./customer-add-dialog.component.scss'],
})
export class CustomerAddDialogComponent extends BaseForm implements OnInit {
  customerAddForm = this.fb.group({
    id: [null],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    age: [new Date(), [Validators.required]],
    telephone: ['', [Validators.required]],
    address: ['', [Validators.required]],

    doctor: ['', [Validators.required]],
    clinic: ['', [Validators.required]],
    contactNote: ['', [Validators.required]],
    location: ['', [Validators.required]],

    appointment: [''],
    gender: [Gender.male, [Validators.required]],
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
