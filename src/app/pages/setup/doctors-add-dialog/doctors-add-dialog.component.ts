import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Doctor } from '../../../@core/data/doctor';
import { CoreService } from '../../../@core/services/core.service';

@UntilDestroy()
@Component({
  selector: 'ngx-doctors-add-dialog',
  templateUrl: './doctors-add-dialog.component.html',
  styleUrls: ['./doctors-add-dialog.component.scss']
})
export class DoctorsAddDialogComponent implements OnInit {
  doctorsAddForm = this.fb.group({
    id: [0],
    name: ["", [Validators.required]],
  });

  doctor: Doctor | null = null

  loading$ = new BehaviorSubject(false);

  get nameControl() {
    return this.doctorsAddForm.controls.name;
  }

  constructor(
    @Optional() private ref: NbDialogRef<DoctorsAddDialogComponent>,
    private fb: FormBuilder,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    if (this.doctor)
      this.doctorsAddForm.patchValue(this.doctor)
  }

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  submit() {
    this.doctorsAddForm.markAllAsTouched();
    if (this.doctorsAddForm.valid && this.loading$.value === false) {
      if (this.doctor) {
        this.updateDoctor()
      } else {
        this.addDoctor()
      }
    }
  }

  isValid(controlName: string): boolean {
    return (
      this.doctorsAddForm.controls[controlName].invalid &&
      (this.doctorsAddForm.controls[controlName].dirty ||
        this.doctorsAddForm.controls[controlName].touched)
    );
  }

  private updateDoctor(): void {
    const doctor: Doctor = this.doctorsAddForm.getRawValue();
    this.loading$.next(true);
    this.coreService.putDoctors(doctor).pipe(
      untilDestroyed(this),
      finalize(() => {
        this.loading$.next(false);
        this.close(true)
      })
    ).subscribe()
  }

  private addDoctor(): void {
    const doctor: Doctor = this.doctorsAddForm.getRawValue();
    this.loading$.next(true);
    this.coreService.postDoctors(doctor).pipe(
      untilDestroyed(this),
      finalize(() => {
        this.loading$.next(false);
        this.close(true)
      })
    ).subscribe()
  }
}
