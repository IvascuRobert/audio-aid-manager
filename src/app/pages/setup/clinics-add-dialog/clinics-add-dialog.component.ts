import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-clinics-add-dialog',
  templateUrl: './clinics-add-dialog.component.html',
  styleUrls: ['./clinics-add-dialog.component.scss']
})
export class ClinicsAddDialogComponent implements OnInit {

  clinicsAddForm = this.fb.group({
    id: [null],
    name: ["", [Validators.required]],
  });

  selectedLocation = null

  loadingLargeGroup = false;

  constructor(
    @Optional() private ref: NbDialogRef<ClinicsAddDialogComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.clinicsAddForm.patchValue(this.selectedLocation)
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log("here");
    this.clinicsAddForm.markAsDirty();
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
      this.clinicsAddForm.controls[controlName].invalid &&
      (this.clinicsAddForm.controls[controlName].dirty ||
        this.clinicsAddForm.controls[controlName].touched)
    );
  }
}
