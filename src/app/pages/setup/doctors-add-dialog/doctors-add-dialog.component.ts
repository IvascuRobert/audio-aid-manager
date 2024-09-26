import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Doctor } from '../../../@core/data/doctor';
import { Entity } from '../../../@core/data/entity';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@UntilDestroy()
@Component({
  selector: 'ngx-doctors-add-dialog',
  templateUrl: './doctors-add-dialog.component.html',
  styleUrls: ['./doctors-add-dialog.component.scss'],
})
export class DoctorsAddDialogComponent extends BaseForm implements OnInit {
  doctorsAddForm = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
  });

  selectedDoctor: Doctor | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get nameControl() {
    return this.doctorsAddForm.controls.name;
  }

  constructor(
    @Optional() private ref: NbDialogRef<DoctorsAddDialogComponent>,
    private fb: FormBuilder,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selectedDoctor) {
      this.doctorsAddForm.patchValue(this.selectedDoctor);
    }
  }

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  submit() {
    this.doctorsAddForm.markAllAsTouched();
    if (this.doctorsAddForm.valid && this.loading$.value === false) {
      if (this.selectedDoctor) {
        this.updateDoctor();
      } else {
        this.addDoctor();
      }
    }
  }

  private updateDoctor(): void {
    const doctor: Doctor = this.doctorsAddForm.getRawValue() as Doctor;
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

  private addDoctor(): void {
    const doctor: Doctor = this.doctorsAddForm.getRawValue() as Doctor;
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
