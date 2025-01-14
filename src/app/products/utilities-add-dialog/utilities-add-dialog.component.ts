import { AsyncPipe, NgFor, NgIf } from '@angular/common';
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
  NbOptionModule,
  NbSelectModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { omit } from 'lodash-es';
import { BehaviorSubject, finalize, map } from 'rxjs';
import { Brand } from '../../@core/data/brand';
import { Entity } from '../../@core/data/entity';
import { ShopState } from '../../@core/data/shop';
import { Utility, UtilityForm, UtilityType } from '../../@core/data/utility';
import { CoreService } from '../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'app-utilities-add-dialog',
  templateUrl: './utilities-add-dialog.component.html',
  styleUrls: ['./utilities-add-dialog.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSpinnerModule,
    AsyncPipe,
    NgIf,
    NgFor,
    NbButtonModule,
    NbOptionModule,
  ],
})
export class UtilitiesAddDialogComponent extends BaseForm implements OnInit {
  coreService = inject(CoreService);

  destroyRef = inject(DestroyRef);

  form = new FormGroup<UtilityForm>({
    id: new FormControl(0, { nonNullable: true }),
    type: new FormControl(UtilityType.Domes, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    brand: new FormControl(Brand.phonak, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    quantity: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    shopId: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: Utility | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  shops$ = this.coreService
    .getEntities$<ShopState>(Entity.Shop)
    .pipe(map(({ entities }) => Object.values(entities)));

  brands$ = this.coreService.brands$;

  utilityType$ = new BehaviorSubject<string[]>(Object.values(UtilityType));

  get typeControl() {
    return this.form.controls.type;
  }

  get nameControl() {
    return this.form.controls.name;
  }

  get brandControl() {
    return this.form.controls.brand;
  }

  get quantityControl() {
    return this.form.controls.quantity;
  }

  get priceControl() {
    return this.form.controls.price;
  }

  get shopIdControl() {
    return this.form.controls.shopId;
  }

  constructor(
    @Optional() private ref: NbDialogRef<UtilitiesAddDialogComponent>
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selected) {
      this.form.patchValue(this.selected);
    }

    this.getShops();
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
      .put<Utility>(this.form.getRawValue(), this.entity)
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
      .post<Omit<Utility, 'id'>>(
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

  private getShops() {
    this.coreService
      .get(Entity.Shop)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
