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
import { Entity } from '../../@core/data/entity';
import { Service, ServiceForm } from '../../@core/data/service';
import { CoreService } from '../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'app-services-add-dialog',
  templateUrl: './services-add-dialog.component.html',
  styleUrls: ['./services-add-dialog.component.scss'],
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
    NbButtonModule,
  ],
})
export class ServicesAddDialogComponent extends BaseForm implements OnInit {
  coreService = inject(CoreService);

  destroyRef = inject(DestroyRef);

  form = new FormGroup<ServiceForm>({
    id: new FormControl(0, { nonNullable: true }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: Service | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get nameControl() {
    return this.form.controls.name;
  }

  get priceControl() {
    return this.form.controls.price;
  }

  constructor(
    @Optional() private ref: NbDialogRef<ServicesAddDialogComponent>
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
      .put<Service>(this.form.getRawValue(), this.entity)
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
      .post<Omit<Service, 'id'>>(
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
