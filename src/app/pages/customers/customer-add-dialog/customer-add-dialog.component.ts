import { Component, Optional } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { Gender } from "../../../@core/data/customer";

@Component({
  selector: "ngx-customer-add-dialog",
  templateUrl: "./customer-add-dialog.component.html",
  styleUrls: ["./customer-add-dialog.component.scss"],
})
export class CustomerAddDialogComponent {
  customerAddForm = this.fb.group({
    id: [null],
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    age: [new Date(), [Validators.required]],
    telephone: ["", [Validators.required]],
    address: ["", [Validators.required]],

    doctor: ["", [Validators.required]],
    clinic: ["", [Validators.required]],
    contactNote: ["", [Validators.required]],
    location: ["", [Validators.required]],

    appointment: [""],
    gender: [Gender.male, [Validators.required]],
  });

  loadingLargeGroup = false;

  constructor(
    @Optional() private ref: NbDialogRef<CustomerAddDialogComponent>,
    private fb: FormBuilder
  ) {}

  cancel() {
    this.ref.close();
  }

  submit() {
    console.log("here");
    this.customerAddForm.markAsDirty();
    // this.ref.close(value);
  }

  toggleLoadingLargeGroupAnimation() {
    this.loadingLargeGroup = true;

    setTimeout(() => (this.loadingLargeGroup = false), 3000);
  }

  isValid(controlName: string): boolean {
    return (
      this.customerAddForm.controls[controlName].invalid &&
      (this.customerAddForm.controls[controlName].dirty ||
        this.customerAddForm.controls[controlName].touched)
    );
  }
}
