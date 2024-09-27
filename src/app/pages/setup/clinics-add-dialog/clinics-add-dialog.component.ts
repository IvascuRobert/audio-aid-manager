import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Clinic } from '../../../@core/data/clinic';
import { Entity } from '../../../@core/data/entity';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@UntilDestroy()
@Component({
  selector: 'ngx-clinics-add-dialog',
  templateUrl: './clinics-add-dialog.component.html',
  styleUrls: ['./clinics-add-dialog.component.scss'],
})
export class ClinicsAddDialogComponent extends BaseForm implements OnInit {
  form = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
  });

  selected: Clinic | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get nameControl() {
    return this.form.controls.name;
  }

  get addressControl() {
    return this.form.controls.address;
  }

  constructor(
    @Optional() private ref: NbDialogRef<ClinicsAddDialogComponent>,
    private fb: FormBuilder,
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
        this.updateClinic();
      } else {
        this.addClinic();
      }
    }
  }

  private updateClinic(): void {
    const clinic: Clinic = this.form.getRawValue() as Clinic;
    this.loading$.next(true);
    this.coreService
      .put(clinic, this.entity)
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }

  private addClinic(): void {
    const clinic: Clinic = this.form.getRawValue() as Clinic;
    this.loading$.next(true);
    this.coreService
      .post(clinic, this.entity)
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
