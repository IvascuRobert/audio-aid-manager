import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { omit } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Battery } from '../../../@core/data/battery';
import { Brand } from '../../../@core/data/brand';
import { Device, DeviceForm, DeviceType } from '../../../@core/data/device';
import { Entity } from '../../../@core/data/entity';
import { ShopState } from '../../../@core/data/shop';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@UntilDestroy()
@Component({
  selector: 'ngx-devices-add-dialog',
  templateUrl: './devices-add-dialog.component.html',
  styleUrls: ['./devices-add-dialog.component.scss'],
})
export class DevicesAddDialogComponent extends BaseForm implements OnInit {
  form = new FormGroup<DeviceForm>({
    id: new FormControl(0, { nonNullable: true }),
    groupId: new FormControl(0, {
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
    battery: new FormControl(Battery.battery10, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    qualityLevel: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    color: new FormControl('rgb(79, 195, 255)', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    aslGroup: new FormControl(0, {
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

  get groupIdControl() {
    return this.form.controls.groupId;
  }

  get brandControl() {
    return this.form.controls.brand;
  }

  get nameControl() {
    return this.form.controls.name;
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

  constructor(
    @Optional() private ref: NbDialogRef<DevicesAddDialogComponent>,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selected) {
      this.form.patchValue(this.selected as any);
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
      .put<Omit<Device, 'status'>>(this.form.getRawValue(), this.entity)
      .pipe(
        untilDestroyed(this),
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
      .post<Omit<Device, 'status' | 'id'>>(
        omit(this.form.getRawValue(), ['id']),
        this.entity
      )
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }

  private getShops() {
    this.coreService.get(Entity.Shop).pipe(untilDestroyed(this)).subscribe();
  }
}
