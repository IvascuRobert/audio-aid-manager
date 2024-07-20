import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-locations-add-dialog',
  templateUrl: './locations-add-dialog.component.html',
  styleUrls: ['./locations-add-dialog.component.scss']
})
export class LocationsAddDialogComponent implements OnInit {
  locationsAddForm = this.fb.group({
    id: [null],
    name: ["", [Validators.required]],
    address: ["", [Validators.required]],
  });

  loadingLargeGroup = false;

  selectedLocation = null

  constructor(
    @Optional() private ref: NbDialogRef<LocationsAddDialogComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.locationsAddForm.patchValue(this.selectedLocation)
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log("here");
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


  isValid(controlName: string): boolean {
    return (
      this.locationsAddForm.controls[controlName].invalid &&
      (this.locationsAddForm.controls[controlName].dirty ||
        this.locationsAddForm.controls[controlName].touched)
    );
  }
}
