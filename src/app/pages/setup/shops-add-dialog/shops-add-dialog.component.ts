import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Entity } from '../../../@core/data/entity';
import { Shop } from '../../../@core/data/shop';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@UntilDestroy()
@Component({
  selector: 'ngx-shops-add-dialog',
  templateUrl: './shops-add-dialog.component.html',
  styleUrls: ['./shops-add-dialog.component.scss'],
})
export class ShopsAddDialogComponent extends BaseForm implements OnInit {
  shopsAddForm = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    // address: ['', [Validators.required]], // TBD Add this controller when is added in BE
  });

  loadingLargeGroup = false;

  selectedShop: Shop | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get nameControl() {
    return this.shopsAddForm.controls.name;
  }

  // TBD Add this controller when is added in BE
  // get addressControl() {
  //   return this.shopsAddForm.controls.address;
  // }

  constructor(
    @Optional() private ref: NbDialogRef<ShopsAddDialogComponent>,
    private fb: FormBuilder,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selectedShop)
      this.shopsAddForm.patchValue(this.selectedShop as any);
  }

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  submit() {
    this.shopsAddForm.markAllAsTouched();
    if (this.shopsAddForm.valid && this.loading$.value === false) {
      if (this.selectedShop) {
        this.updateShop();
      } else {
        this.addShop();
      }
    }
  }

  private updateShop(): void {
    const shop: Shop = this.shopsAddForm.getRawValue() as Shop;
    this.loading$.next(true);
    this.coreService
      .put(shop, this.entity)
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }

  private addShop(): void {
    const shop: Shop = this.shopsAddForm.getRawValue() as Shop;
    this.loading$.next(true);
    this.coreService
      .post(shop, this.entity)
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }
}
