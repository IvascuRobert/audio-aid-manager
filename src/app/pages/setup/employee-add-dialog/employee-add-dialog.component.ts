import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Entity } from '../../../@core/data/entity';
import { User } from '../../../@core/data/user';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@UntilDestroy()
@Component({
  selector: 'ngx-employee-add-dialog',
  templateUrl: './employee-add-dialog.component.html',
  styleUrls: ['./employee-add-dialog.component.scss'],
})
export class EmployeeAddDialogComponent extends BaseForm implements OnInit {
  employeeAddForm = this.fb.group({
    id: [0],
    email: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
    role: ['', [Validators.required]],
  });

  selectedEmployee: User | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get emailControl() {
    return this.employeeAddForm.controls.email;
  }

  get nameControl() {
    return this.employeeAddForm.controls.name;
  }

  get passwordControl() {
    return this.employeeAddForm.controls.password;
  }

  get roleControl() {
    return this.employeeAddForm.controls.role;
  }

  get genderControl() {
    return this.employeeAddForm.controls.gender;
  }

  constructor(
    @Optional() private ref: NbDialogRef<EmployeeAddDialogComponent>,
    private fb: FormBuilder,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selectedEmployee) {
      this.employeeAddForm.patchValue(this.selectedEmployee);
    }
  }

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  submit() {
    this.employeeAddForm.markAllAsTouched();
    if (this.employeeAddForm.valid && this.loading$.value === false) {
      if (this.selectedEmployee) {
        this.update();
      } else {
        this.add();
      }
    }
  }

  private update(): void {
    const doctor: User = this.employeeAddForm.getRawValue() as User;
    this.loading$.next(true);
    this.coreService
      .put(doctor, this.entity)
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
    const doctor: User = this.employeeAddForm.getRawValue() as User;
    this.loading$.next(true);
    this.coreService
      .post(doctor, this.entity)
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }
}
