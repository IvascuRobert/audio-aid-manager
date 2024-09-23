import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Location } from '../../../@core/data/location';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-locations-add-dialog',
  templateUrl: './locations-add-dialog.component.html',
  styleUrls: ['./locations-add-dialog.component.scss'],
})
export class LocationsAddDialogComponent extends BaseForm implements OnInit {
  locationsAddForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
  });

  loadingLargeGroup = false;

  selectedLocation: Location | null = null;

  get nameControl() {
    return this.locationsAddForm.controls.name;
  }

  get addressControl() {
    return this.locationsAddForm.controls.address;
  }

  constructor(
    @Optional() private ref: NbDialogRef<LocationsAddDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.locationsAddForm.patchValue(this.selectedLocation as any);
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log('here');
    this.locationsAddForm.markAsDirty();
    // this.ref.close(value);
  }

  toggleLoadingLargeGroupAnimation() {
    this.loadingLargeGroup = true;

    setTimeout(() => {
      this.loadingLargeGroup = false;
      this.ref.close();
    }, 3000);
  }
}
