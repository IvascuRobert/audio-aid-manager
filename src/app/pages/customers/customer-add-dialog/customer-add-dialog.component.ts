import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { omit } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import {
  Customer,
  CustomerApi,
  CustomerContactNoteType,
  CustomerForm,
  Gender,
} from '../../../@core/data/customer';
import { Entity } from '../../../@core/data/entity';
import { ShopState } from '../../../@core/data/shop';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@UntilDestroy()
@Component({
  selector: 'ngx-customer-add-dialog',
  templateUrl: './customer-add-dialog.component.html',
  styleUrls: ['./customer-add-dialog.component.scss'],
})
export class CustomerAddDialogComponent extends BaseForm implements OnInit {
  form = new FormGroup<CustomerForm>({
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
    dateOfBirth: new FormControl(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    clinicId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    contactNote: new FormControl(CustomerContactNoteType.Other, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    doctorId: new FormControl('', {
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
    phoneNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    comment: new FormControl('', {
      nonNullable: true,
    }),
    taxCode: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: Customer | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  gender$ = this.coreService.gender$;

  customerContactNoteType$ = new BehaviorSubject<string[]>(
    Object.values(CustomerContactNoteType)
  );

  clinics$ = this.coreService
    .getEntities$<ShopState>(Entity.Clinic)
    .pipe(map(({ entities }) => Object.values(entities)));

  doctors$ = this.coreService
    .getEntities$<ShopState>(Entity.Doctor)
    .pipe(map(({ entities }) => Object.values(entities)));

  get firstNameControl() {
    return this.form.controls.firstName;
  }

  get lastNameControl() {
    return this.form.controls.lastName;
  }

  get emailControl() {
    return this.form.controls.email;
  }

  get dateOfBirthControl() {
    return this.form.controls.dateOfBirth;
  }

  get phoneNumberControl() {
    return this.form.controls.phoneNumber;
  }

  get doctorIdControl() {
    return this.form.controls.doctorId;
  }

  get addressControl() {
    return this.form.controls.address;
  }

  get clinicIdControl() {
    return this.form.controls.clinicId;
  }

  get contactNoteControl() {
    return this.form.controls.contactNote;
  }

  get genderControl() {
    return this.form.controls.gender;
  }

  get commentControl() {
    return this.form.controls.comment;
  }

  get taxCodeControl() {
    return this.form.controls.taxCode;
  }

  constructor(
    @Optional() private ref: NbDialogRef<CustomerAddDialogComponent>,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selected) {
      this.form.patchValue(this.selected);
    }

    this.getDoctors();
    this.getClinics();
  }

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid && this.loading$.value === false) {
      if (this.selected) {
        this.update();
      } else {
        this.add();
      }
    }
  }

  private update(): void {
    this.loading$.next(true);
    this.coreService
      .put<CustomerApi>(this.form.getRawValue(), this.entity)
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }

  private add(): void {
    this.loading$.next(true);
    this.coreService
      .post<Omit<CustomerApi, 'id'>>(
        omit(this.form.getRawValue(), ['id']),
        this.entity
      )
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }

  private getDoctors() {
    this.coreService.get(Entity.Doctor).pipe(untilDestroyed(this)).subscribe();
  }

  private getClinics() {
    this.coreService.get(Entity.Clinic).pipe(untilDestroyed(this)).subscribe();
  }
}
