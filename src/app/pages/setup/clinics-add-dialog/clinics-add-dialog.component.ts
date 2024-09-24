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
  clinicsAddForm = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
  });

  selectedClinic: Clinic | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get nameControl() {
    return this.clinicsAddForm.controls.name;
  }

  get addressControl() {
    return this.clinicsAddForm.controls.address;
  }

  constructor(
    @Optional() private ref: NbDialogRef<ClinicsAddDialogComponent>,
    private fb: FormBuilder,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selectedClinic)
      this.clinicsAddForm.patchValue(this.selectedClinic as any);
  }

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  submit() {
    this.clinicsAddForm.markAllAsTouched();
    if (this.clinicsAddForm.valid && this.loading$.value === false) {
      if (this.selectedClinic) {
        this.updateClinic();
      } else {
        this.addClinic();
      }
    }
  }

  private updateClinic(): void {
    const clinic: Clinic = this.clinicsAddForm.getRawValue() as Clinic;
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
    const clinic: Clinic = this.clinicsAddForm.getRawValue() as Clinic;
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
