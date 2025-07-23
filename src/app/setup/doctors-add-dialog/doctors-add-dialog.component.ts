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
  NbSpinnerModule,
} from '@nebular/theme';
import { omit } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Doctor, DoctorForm } from '../../@core/data/doctor';
import { Entity } from '../../@core/data/entity';

import { CoreService } from '../../@core/services/core.service';
import { FormErrorsComponent } from '../../shared/components/form-errors/form-errors.component';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'app-doctors-add-dialog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbIconModule,
    FormErrorsComponent,
    NbInputModule,
    NbSpinnerModule,
    NgIf,
    AsyncPipe,
    NbButtonModule,
  ],
  templateUrl: './doctors-add-dialog.component.html',
  styleUrls: ['./doctors-add-dialog.component.scss'],
})
export class DoctorsAddDialogComponent extends BaseForm implements OnInit {
  destroyRef = inject(DestroyRef);

  form = new FormGroup<DoctorForm>({
    id: new FormControl(0, { nonNullable: true }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: Doctor | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get nameControl() {
    return this.form.controls.name;
  }

  constructor(
    @Optional() private ref: NbDialogRef<DoctorsAddDialogComponent>,
    private coreService: CoreService,
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
        this.updateDoctor();
      } else {
        this.addDoctor();
      }
    }
  }

  private updateDoctor(): void {
    this.loading$.next(true);
    this.coreService
      .put<Doctor>(this.form.getRawValue(), this.entity)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        }),
      )
      .subscribe();
  }

  private addDoctor(): void {
    this.loading$.next(true);
    this.coreService
      .post<Omit<Doctor, 'id'>>(
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
}
