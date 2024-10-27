import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { omit } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Entity } from '../../../@core/data/entity';
import {
  Process,
  ProcessEndReason,
  ProcessForm,
  UserHasDeviceType,
} from '../../../@core/data/process';
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
    comment: new FormControl('', { nonNullable: true }),
    leftEarDevice: new FormControl(UserHasDeviceType.none, {
      nonNullable: true,
    }),
    leftEarValue: new FormControl(0, { nonNullable: true }),
    questionnaire: new FormControl(0, { nonNullable: true }),
    reason: new FormControl(ProcessEndReason.style, { nonNullable: true }),
    rightEarDevice: new FormControl(UserHasDeviceType.none, {
      nonNullable: true,
    }),
    rightEarValue: new FormControl(0, { nonNullable: true }),
  });

  selected: Process | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get leftEarValueControl() {
    return this.form.controls.leftEarValue;
  }

  get leftEarDeviceControl() {
    return this.form.controls.leftEarDevice;
  }

  get rightEarValueControl() {
    return this.form.controls.rightEarValue;
  }

  get rightEarDeviceControl() {
    return this.form.controls.rightEarDevice;
  }

  get questionnaireControl() {
    return this.form.controls.questionnaire;
  }

  get reasonControl() {
    return this.form.controls.reason;
  }

  get commentControl() {
    return this.form.controls.comment;
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
