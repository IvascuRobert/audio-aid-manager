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
import { NgxColorsModule } from 'ngx-colors';
import { BehaviorSubject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Battery } from '../../@core/data/battery';
import { Brand } from '../../@core/data/brand';
import {
  Device,
  DeviceAslGroup,
  DeviceForm,
  DevicePosition,
  DeviceQualityLevel,
  DeviceType,
} from '../../@core/data/device';
import { Entity } from '../../@core/data/entity';
import { ShopState } from '../../@core/data/shop';
import { CoreService } from '../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'app-devices-add-dialog',
  templateUrl: './devices-add-dialog.component.html',
  styleUrls: ['./devices-add-dialog.component.scss'],
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
    NgxColorsModule,
  ],
})
export class DevicesAddDialogComponent extends BaseForm implements OnInit {
  coreService = inject(CoreService);

  destroyRef = inject(DestroyRef);

  form = new FormGroup<DeviceForm>({
    id: new FormControl(0, { nonNullable: true }),
    group: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    brand: new FormControl(Brand.phonak, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    serialNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    type: new FormControl(DeviceType.BTE, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    position: new FormControl(DevicePosition.Neutral, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    battery: new FormControl(Battery.battery10, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    qualityLevel: new FormControl(DeviceQualityLevel.Level1, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    color: new FormControl('rgb(79, 195, 255)', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    aslGroup: new FormControl(DeviceAslGroup.AslGroup0, {
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

  selected: Device | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  shops$ = this.coreService
    .getEntities$<ShopState>(Entity.Shop)
    .pipe(map(({ entities }) => Object.values(entities)));

  brands$ = this.coreService.brands$;

  positions$ = new BehaviorSubject<string[]>(Object.values(DevicePosition));

  types$ = new BehaviorSubject<string[]>(Object.values(DeviceType));

  batteries$ = new BehaviorSubject<string[]>(Object.values(Battery));

  qualityLevel$ = new BehaviorSubject<any>(Object.values(DeviceQualityLevel));

  aslGroup$ = new BehaviorSubject<any>(Object.values(DeviceAslGroup));

  get groupControl() {
    return this.form.controls.group;
  }

  get brandControl() {
    return this.form.controls.brand;
  }

  get nameControl() {
    return this.form.controls.name;
  }

  get positionControl() {
    return this.form.controls.position;
  }

  get serialNumberControl() {
    return this.form.controls.serialNumber;
  }

  get typeControl() {
    return this.form.controls.type;
  }

  get batteryControl() {
    return this.form.controls.battery;
  }

  get qualityLevelControl() {
    return this.form.controls.qualityLevel;
  }

  get colorControl() {
    return this.form.controls.color;
  }

  get aslGroupControl() {
    return this.form.controls.aslGroup;
  }

  get priceControl() {
    return this.form.controls.price;
  }

  get shopIdControl() {
    return this.form.controls.shopId;
  }

  constructor(@Optional() private ref: NbDialogRef<DevicesAddDialogComponent>) {
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
      .put<Omit<Device, 'status' | 'createdAt' | 'updatedAt'>>(
        this.form.getRawValue(),
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

  private add(): void {
    this.loading$.next(true);
    this.coreService
      .post<Omit<Device, 'status' | 'createdAt' | 'updatedAt' | 'id'>>(
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
