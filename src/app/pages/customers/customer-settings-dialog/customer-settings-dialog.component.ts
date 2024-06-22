import { Component, OnInit, Optional } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  getItem,
} from "../../../@core/utils/save-local-storage";

@Component({
  selector: "ngx-customer-settings-dialog",
  templateUrl: "./customer-settings-dialog.component.html",
  styleUrls: ["./customer-settings-dialog.component.scss"],
})
export class CustomerSettingsDialogComponent implements OnInit {
  customerSettingsForm = this.fb.group({
    columns: [null],
  });

  loadingLargeGroup = false;

  hiddenColumns = [
    "email",
    "address",
    "doctor",
    "clinic",
    "contactNote",
    "processStatus",
    "location",
    "appointment",
  ];

  constructor(
    @Optional() private ref: NbDialogRef<CustomerSettingsDialogComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadSelectColumnsFromLocalStorage();
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    this.loadingLargeGroup = true;

    setTimeout(() => {
      const customerSettingsFormValue = this.customerSettingsForm.getRawValue();
      this.loadingLargeGroup = false;
      this.ref.close({
        ...customerSettingsFormValue,
        ...{ hiddenColumns: this.hiddenColumns },
      });
    }, 3000);
  }

  isValid(controlName: string): boolean {
    return (
      this.customerSettingsForm.controls[controlName].invalid &&
      (this.customerSettingsForm.controls[controlName].dirty ||
        this.customerSettingsForm.controls[controlName].touched)
    );
  }

  private loadSelectColumnsFromLocalStorage() {
    const columns = getItem(LOCAL_STORAGE_KEYS_FOR_TABLE.customers);
    this.customerSettingsForm.controls.columns.setValue(columns);
  }
}
