import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { omit } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Entity } from '../../../@core/data/entity';
import { Room, RoomForm } from '../../../@core/data/room';
import { ShopState } from '../../../@core/data/shop';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@UntilDestroy()
@Component({
  selector: 'ngx-rooms-add-dialog',
  templateUrl: './rooms-add-dialog.component.html',
  styleUrls: ['./rooms-add-dialog.component.scss'],
})
export class RoomsAddDialogComponent extends BaseForm implements OnInit {
  form = new FormGroup<RoomForm>({
    id: new FormControl(0, { nonNullable: true }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    shopId: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: Room | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  shops$ = this.coreService
    .getEntities$<ShopState>(Entity.Shop)
    .pipe(map(({ entities }) => Object.values(entities)));

  get nameControl() {
    return this.form.controls.name;
  }

  get shopIdControl() {
    return this.form.controls.shopId;
  }

  constructor(
    @Optional() private ref: NbDialogRef<RoomsAddDialogComponent>,
    private coreService: CoreService
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
      .put<Room>(this.form.getRawValue(), this.entity)
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
      .post<Omit<Room, 'id'>>(
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
