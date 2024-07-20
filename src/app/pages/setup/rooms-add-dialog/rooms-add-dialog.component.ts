import { Component, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-rooms-add-dialog',
  templateUrl: './rooms-add-dialog.component.html',
  styleUrls: ['./rooms-add-dialog.component.scss']
})
export class RoomsAddDialogComponent {

  roomsAddForm = this.fb.group({
    id: [null],
    name: ["", [Validators.required]],
  });

  loadingLargeGroup = false;

  constructor(
    @Optional() private ref: NbDialogRef<RoomsAddDialogComponent>,
    private fb: FormBuilder
  ) { }

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log("here");
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


  isValid(controlName: string): boolean {
    return (
      this.roomsAddForm.controls[controlName].invalid &&
      (this.roomsAddForm.controls[controlName].dirty ||
        this.roomsAddForm.controls[controlName].touched)
    );
  }
}
