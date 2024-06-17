import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../@core/data/smart-table";
import { mapHideOrShowColumns } from "../../@core/utils/map-hide-or-show-columns";
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  getItem,
  setItem,
} from "../../@core/utils/save-local-storage";
import { AgeCellComponent } from "../shared/custom-table-cell-render/age-cell.component";
import { BoldTextCellComponent } from "../shared/custom-table-cell-render/bold-text-cell.component";
import { CustomerStatusCellComponent } from "../shared/custom-table-cell-render/customer-status-cell.component";
import { DateCellComponent } from "../shared/custom-table-cell-render/date-cell.component";
import { EmailCellComponent } from "../shared/custom-table-cell-render/email-cell.component";
import { GenderCellComponent } from "../shared/custom-table-cell-render/gender-cell.component";
import { PhoneCellComponent } from "../shared/custom-table-cell-render/phone-cell.component";
import { ProcessStatusCellComponent } from "../shared/custom-table-cell-render/process-status-cell.component";

@Component({
  selector: "ngx-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent {
  settings: Record<string, any> = {
    actions: false,
    columns: {
      id: {
        title: "ID",
        type: "number",
        width: "1%",
      },
      status: {
        title: "Status",
        type: "custom",
        renderComponent: CustomerStatusCellComponent,
      },
      firstName: {
        title: "First Name",
        type: "custom",
        renderComponent: BoldTextCellComponent,
      },
      lastName: {
        title: "Last Name",
        type: "custom",
        renderComponent: BoldTextCellComponent,
      },
      gender: {
        title: "Gender",
        type: "custom",
        renderComponent: GenderCellComponent,
      },
      age: {
        title: "Age",
        type: "custom",
        renderComponent: AgeCellComponent,
      },
      telephone: {
        title: "Telephone",
        type: "custom",
        renderComponent: PhoneCellComponent,
      },
      email: {
        title: "E-mail",
        type: "custom",
        renderComponent: EmailCellComponent,
        hide: true,
      },
      address: {
        title: "Address",
        type: "string",
        hide: true,
      },
      doctor: {
        title: "Doctor",
        type: "string",
        hide: true,
      },
      clinic: {
        title: "Clinic",
        type: "string",
        hide: true,
      },
      contactNote: {
        title: "Contact Note",
        type: "string",
        hide: true,
      },
      processStatus: {
        title: "Process status",
        type: "custom",
        renderComponent: ProcessStatusCellComponent,
        hide: true,
      },
      location: {
        title: "Location",
        type: "string",
        hide: true,
      },
      appointment: {
        title: "Appointment",
        type: "custom",
        renderComponent: DateCellComponent,
        hide: true,
      },
    },
  };

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

  selectedColumns = [];
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData().customers;
    this.source.load(data);
    this.loadTableSettingsFromLocalStorage();
  }

  handleSelectedColumns(columns: string[]): void {
    this.settings = mapHideOrShowColumns(
      columns,
      this.settings,
      this.hiddenColumns
    );
    setItem(LOCAL_STORAGE_KEYS_FOR_TABLE.customers, columns);
  }

  private loadTableSettingsFromLocalStorage() {
    const columns = getItem(LOCAL_STORAGE_KEYS_FOR_TABLE.customers);

    if (columns) {
      this.settings = mapHideOrShowColumns(
        columns,
        this.settings,
        this.hiddenColumns
      );
      this.selectedColumns = columns;
    }
  }
}
