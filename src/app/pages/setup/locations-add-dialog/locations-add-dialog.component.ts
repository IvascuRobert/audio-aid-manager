import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Entity } from '../../../@core/data/entity';
import { Location } from '../../../@core/data/location';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@UntilDestroy()
@Component({
  selector: 'ngx-locations-add-dialog',
  templateUrl: './locations-add-dialog.component.html',
  styleUrls: ['./locations-add-dialog.component.scss'],
})
export class LocationsAddDialogComponent extends BaseForm implements OnInit {
  locationsAddForm = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    // address: ['', [Validators.required]], // TBD Add this controller when is added in BE
  });

  loadingLargeGroup = false;

  selectedLocation: Location | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get nameControl() {
    return this.locationsAddForm.controls.name;
  }

  // TBD Add this controller when is added in BE
  // get addressControl() {
  //   return this.locationsAddForm.controls.address;
  // }

  constructor(
    @Optional() private ref: NbDialogRef<LocationsAddDialogComponent>,
    private fb: FormBuilder,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selectedLocation)
      this.locationsAddForm.patchValue(this.selectedLocation as any);
  }

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  submit() {
    this.locationsAddForm.markAllAsTouched();
    if (this.locationsAddForm.valid && this.loading$.value === false) {
      if (this.selectedLocation) {
        this.updateLocation();
      } else {
        this.addLocation();
      }
    }
  }

  private updateLocation(): void {
    const location: Location = this.locationsAddForm.getRawValue() as Location;
    this.loading$.next(true);
    this.coreService
      .put(location, this.entity)
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }

  private addLocation(): void {
    const location: Location = this.locationsAddForm.getRawValue() as Location;
    this.loading$.next(true);
    this.coreService
      .post(location, this.entity)
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
