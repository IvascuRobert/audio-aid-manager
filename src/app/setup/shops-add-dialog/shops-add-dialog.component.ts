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
import { Shop, ShopForm } from '../../@core/data/shop';

import { CoreService } from '../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'app-shops-add-dialog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSpinnerModule,
    NgIf,
    AsyncPipe,
    NbButtonModule,
  ],
  templateUrl: './shops-add-dialog.component.html',
  styleUrls: ['./shops-add-dialog.component.scss'],
})
export class ShopsAddDialogComponent extends BaseForm implements OnInit {
  destroyRef = inject(DestroyRef);

  form = new FormGroup<ShopForm>({
    id: new FormControl(0, { nonNullable: true }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    address: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: Shop | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get nameControl() {
    return this.form.controls.name;
  }

  get addressControl() {
    return this.form.controls.address;
  }

  constructor(
    @Optional() private ref: NbDialogRef<ShopsAddDialogComponent>,
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
        this.updateShop();
      } else {
        this.addShop();
      }
    }
  }

  private updateShop(): void {
    this.loading$.next(true);
    this.coreService
      .put<Shop>(this.form.getRawValue(), this.entity)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }

  private addShop(): void {
    this.loading$.next(true);
    this.coreService
      .post<Omit<Shop, 'id'>>(
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
