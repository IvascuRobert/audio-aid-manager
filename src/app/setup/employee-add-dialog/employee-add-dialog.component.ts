import { AsyncPipe, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit, Optional, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogRef,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { omit } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Gender } from '../../@core/data/customer';
import { Entity } from '../../@core/data/entity';
import { Role } from '../../@core/data/role';
import { User, UserForm } from '../../@core/data/user';

import { CoreService } from '../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'app-employee-add-dialog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbIconModule,
    NgIf,
    AsyncPipe,
    NbInputModule,
    NbRadioModule,
    NbSpinnerModule,
    NbSelectModule,
    NbButtonModule,
  ],
  templateUrl: './employee-add-dialog.component.html',
  styleUrls: ['./employee-add-dialog.component.scss'],
})
export class EmployeeAddDialogComponent extends BaseForm implements OnInit {
  destroyRef = inject(DestroyRef);

  form = new FormGroup<UserForm>({
    id: new FormControl(0, { nonNullable: true }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    gender: new FormControl(Gender.male, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    role: new FormControl(Role.admin, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: User | null = null;

  loading$ = new BehaviorSubject(false);

  readonly entity!: Entity;

  readonly genderTpl = Gender;

  readonly roleTpl = Role;

  get idControl() {
    return this.form.controls.id;
  }

  get emailControl() {
    return this.form.controls.email;
  }

  get firstNameControl() {
    return this.form.controls.firstName;
  }

  get lastNameControl() {
    return this.form.controls.lastName;
  }

  get roleControl() {
    return this.form.controls.role;
  }

  get genderControl() {
    return this.form.controls.gender;
  }

  constructor(
    @Optional() private ref: NbDialogRef<EmployeeAddDialogComponent>,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selected) {
      this.form.patchValue(this.selected);
    }
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
      .patch<Omit<User, 'password'>>(
        `${this.idControl.value ?? 0}`,
        this.form.getRawValue(),
        this.entity
      )
      .pipe(
        takeUntilDestroyed(this.destroyRef),
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
      .post<Omit<User, 'password' | 'id'>>(
        omit(this.form.getRawValue(), ['id']),
        this.entity
      )
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }
}
