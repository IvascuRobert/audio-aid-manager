import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-rooms-add-dialog',
  templateUrl: './rooms-add-dialog.component.html',
  styleUrls: ['./rooms-add-dialog.component.scss'],
})
export class RoomsAddDialogComponent extends BaseForm {
  roomsAddForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required]],
  });

  loadingLargeGroup = false;

  get nameControl() {
    return this.roomsAddForm.controls.name;
  }

  constructor(
    @Optional() private ref: NbDialogRef<RoomsAddDialogComponent>,
    private fb: FormBuilder
  ) {
    super();
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log('here');
    this.roomsAddForm.markAsDirty();
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
