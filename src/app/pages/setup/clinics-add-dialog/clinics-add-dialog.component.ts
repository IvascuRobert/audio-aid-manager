import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Clinic } from '../../../@core/data/clinic';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-clinics-add-dialog',
  templateUrl: './clinics-add-dialog.component.html',
  styleUrls: ['./clinics-add-dialog.component.scss'],
})
export class ClinicsAddDialogComponent extends BaseForm implements OnInit {
  clinicsAddForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required]],
  });

  selectedClinic: Clinic | null = null;

  loadingLargeGroup = false;

  get nameControl() {
    return this.clinicsAddForm.controls.name;
  }

  constructor(
    @Optional() private ref: NbDialogRef<ClinicsAddDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.clinicsAddForm.patchValue(this.selectedClinic as any);
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log('here');
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
}
