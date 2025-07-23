import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit, Optional, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogRef,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbOptionModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { omit } from 'lodash-es';
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  finalize,
  map,
  tap,
} from 'rxjs';
import { Entity } from '../../@core/data/entity';
import { Duration, Process, ProcessForm } from '../../@core/data/process';
import { CoreService } from '../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';
import { ProcessStatusType } from '../../@core/data/customer';

@Component({
  selector: 'app-process-add-dialog',
  templateUrl: './process-add-dialog.component.html',
  styleUrls: ['./process-add-dialog.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSpinnerModule,
    AsyncPipe,
    NgIf,
    NgFor,
    NbButtonModule,
    NbOptionModule,
    NbSelectModule,
    NbRadioModule,
    NbFormFieldModule,
    NbDatepickerModule,
  ],
})
export class ProcessAddDialogComponent extends BaseForm implements OnInit {
  coreService = inject(CoreService);

  destroyRef = inject(DestroyRef);

  form = new FormGroup<ProcessForm>({
    id: new FormControl(0, { nonNullable: true }),
    status: new FormControl(ProcessStatusType.open, { nonNullable: true }),
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

  get statusControl() {
    return this.form.controls.status;
  }

  constructor(@Optional() private ref: NbDialogRef<ProcessAddDialogComponent>) {
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
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();

    this.rightEarDeviceDurationControl.valueChanges
      .pipe(
        tap((rightEarDeviceDurationValue) => {
          if (rightEarDeviceDurationValue === Duration.none) {
            this.currentRightEarDeviceNameControl.reset();
          }
        }),
        takeUntilDestroyed(this.destroyRef),
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
      .put<Process>(this.form.getRawValue(), this.entity)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        }),
      )
      .subscribe();
  }

  private add(): void {
    this.loading$.next(true);
    this.processStatusByExceededValue();

    this.coreService
      .post<Omit<Process, 'id'>>(
        omit(this.form.getRawValue(), ['id']),
        this.entity,
      )
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        }),
      )
      .subscribe();
  }

  private processStatusByExceededValue(): void {
    const isExceedTheNormalValue =
      [this.leftEarValueControl.value, this.rightEarValueControl.value].filter(
        (value) => value > 25,
      ).length > 0;

    if (isExceedTheNormalValue) {
      this.statusControl.setValue(ProcessStatusType.open);
    } else {
      this.statusControl.setValue(ProcessStatusType.end);
    }
  }
}
