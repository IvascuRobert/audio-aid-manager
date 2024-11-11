import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { omit } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Entity } from '../../../@core/data/entity';
import { Duration, Process, ProcessForm } from '../../../@core/data/process';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@UntilDestroy()
@Component({
  selector: 'ngx-customer-details-add-dialog',
  templateUrl: './customer-details-add-dialog.component.html',
  styleUrls: ['./customer-details-add-dialog.component.scss'],
})
export class CustomerDetailsAddDialogComponent
  extends BaseForm
  implements OnInit
{
  form = new FormGroup<ProcessForm>({
    id: new FormControl(0, { nonNullable: true }),
    leftEarValue: new FormControl(0, { nonNullable: true }),
    leftEarDeviceDuration: new FormControl(Duration.none, {
      nonNullable: true,
    }),
    currentLeftEarDeviceName: new FormControl('', { nonNullable: true }),
    rightEarValue: new FormControl(0, { nonNullable: true }),
    rightEarDeviceDuration: new FormControl(Duration.none, {
      nonNullable: true,
    }),

    reason: new FormControl('', { nonNullable: true }),
    currentRightEarDeviceName: new FormControl('', { nonNullable: true }),
    questionnaire: new FormControl(0, { nonNullable: true }),
    comment: new FormControl('', { nonNullable: true }),
    customerId: new FormControl(null, { nonNullable: true }),
  });

  selected: Process | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  params: Record<string, string> | null = null;

  duration$ = new BehaviorSubject<string[]>(Object.values(Duration));

  durationTpl = Duration;

  get leftEarValueControl() {
    return this.form.controls.leftEarValue;
  }

  get leftEarDeviceDurationControl() {
    return this.form.controls.leftEarDeviceDuration;
  }

  get currentLeftEarDeviceNameControl() {
    return this.form.controls.currentLeftEarDeviceName;
  }

  get rightEarValueControl() {
    return this.form.controls.rightEarValue;
  }

  get rightEarDeviceDurationControl() {
    return this.form.controls.rightEarDeviceDuration;
  }

  get currentRightEarDeviceNameControl() {
    return this.form.controls.currentRightEarDeviceName;
  }

  get questionnaireControl() {
    return this.form.controls.questionnaire;
  }

  get commentControl() {
    return this.form.controls.comment;
  }

  get customerIdControl() {
    return this.form.controls.customerId;
  }

  constructor(
    @Optional() private ref: NbDialogRef<CustomerDetailsAddDialogComponent>,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selected) {
      this.form.patchValue(this.selected);
    }

    if (this.params) {
      this.customerIdControl.setValue(parseFloat(this.params['customerId']));
    }

    this.leftEarDeviceDurationControl.valueChanges
      .pipe(
        tap((leftEarDeviceDurationValue) => {
          if (leftEarDeviceDurationValue === Duration.none) {
            this.currentLeftEarDeviceNameControl.reset();
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();

    this.rightEarDeviceDurationControl.valueChanges
      .pipe(
        tap((rightEarDeviceDurationValue) => {
          if (rightEarDeviceDurationValue === Duration.none) {
            this.currentRightEarDeviceNameControl.reset();
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
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
      .put<Omit<Process, 'status'>>(this.form.getRawValue(), this.entity)
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
      .post<Omit<Process, 'status' | 'id'>>(
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
}
