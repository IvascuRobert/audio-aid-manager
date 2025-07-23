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
import { omit } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import {
  Accessory,
  AccessoryForm,
  AccessoryType,
} from '../../@core/data/accessory';
import { Brand } from '../../@core/data/brand';
import { Entity } from '../../@core/data/entity';
import { ShopState } from '../../@core/data/shop';
import { CoreService } from '../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'app-accessories-add-dialog',
  templateUrl: './accessories-add-dialog.component.html',
  styleUrls: ['./accessories-add-dialog.component.scss'],
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
  ],
})
export class AccessoriesAddDialogComponent extends BaseForm implements OnInit {
  coreService = inject(CoreService);

  destroyRef = inject(DestroyRef);

  form = new FormGroup<AccessoryForm>({
    id: new FormControl(0, { nonNullable: true }),
    groupId: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    serialNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    brand: new FormControl(Brand.amplifon, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    type: new FormControl(AccessoryType.charger, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    shopId: new FormControl(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: Accessory | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  shops$ = this.coreService
    .getEntities$<ShopState>(Entity.Shop)
    .pipe(map(({ entities }) => Object.values(entities)));

  brands$ = this.coreService.brands$;

  accessoryType$ = new BehaviorSubject<string[]>(Object.values(AccessoryType));

  get groupIdControl() {
    return this.form.controls.groupId;
  }

  get serialNumberControl() {
    return this.form.controls.serialNumber;
  }

  get nameControl() {
    return this.form.controls.name;
  }

  get brandControl() {
    return this.form.controls.brand;
  }

  get typeControl() {
    return this.form.controls.type;
  }

  get priceControl() {
    return this.form.controls.price;
  }

  get shopIdControl() {
    return this.form.controls.shopId;
  }

  constructor(
    @Optional() private ref: NbDialogRef<AccessoriesAddDialogComponent>,
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
      .put<Omit<Accessory, 'status'>>(this.form.getRawValue(), this.entity)
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
    this.coreService
      .post<Omit<Accessory, 'status' | 'id'>>(
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

  private getShops() {
    this.coreService
      .get(Entity.Shop)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
