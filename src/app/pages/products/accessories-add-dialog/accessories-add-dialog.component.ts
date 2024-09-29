import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { untilDestroyed } from '@ngneat/until-destroy';
import { omit } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Accessory } from '../../../@core/data/accessory';
import { Entity } from '../../../@core/data/entity';
import { ShopState } from '../../../@core/data/shop';
import { UserState } from '../../../@core/data/user';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-accessories-add-dialog',
  templateUrl: './accessories-add-dialog.component.html',
  styleUrls: ['./accessories-add-dialog.component.scss'],
})
export class AccessoriesAddDialogComponent extends BaseForm implements OnInit {
  form = this.fb.group({
    id: [0],
    group: ['', [Validators.required]],
    serialNumber: ['', [Validators.required]],
    name: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    type: ['', [Validators.required]],
    price: ['', [Validators.required]],
    shopId: ['', [Validators.required]],
    userId: ['', [Validators.required]],
  });

  selected: Accessory | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  shops$ = this.coreService
    .getEntities$<ShopState>(Entity.Shop)
    .pipe(map(({ entities }) => Object.values(entities)));

  users$ = this.coreService
    .getEntities$<UserState>(Entity.User)
    .pipe(map(({ entities }) => Object.values(entities)));

  get groupControl() {
    return this.form.controls.group;
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

  get userIdControl() {
    return this.form.controls.userId;
  }

  constructor(
    @Optional() private ref: NbDialogRef<AccessoriesAddDialogComponent>,
    private fb: FormBuilder,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selected) {
      this.form.patchValue(this.selected as any);
    }

    this.getShops();
    this.getUsers();
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
      .put(this.form.getRawValue(), this.entity)
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
      .post(omit(this.form.getRawValue(), ['id']), this.entity)
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

  private getUsers() {
    this.coreService.get(Entity.User).pipe(untilDestroyed(this)).subscribe();
  }
}
