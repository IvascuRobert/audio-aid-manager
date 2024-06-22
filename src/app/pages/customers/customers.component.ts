import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NbComponentSize, NbDialogService } from "@nebular/theme";
import { isNull, remove } from "lodash";
import { LocalDataSource } from "ng2-smart-table";
import { Customer } from "../../@core/data/customer";
import { SmartTableData } from "../../@core/data/smart-table";
import {
  mapHideOrShowColumns,
  mapShowColumns,
} from "../../@core/utils/map-hide-or-show-columns";
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  getItem,
  setItem,
} from "../../@core/utils/save-local-storage";
import { ActionsCellComponent } from "../shared/custom-table-cell-render/actions-cell.component";
import { AgeCellComponent } from "../shared/custom-table-cell-render/age-cell.component";
import { BoldTextCellComponent } from "../shared/custom-table-cell-render/bold-text-cell.component";
import { CustomerStatusCellComponent } from "../shared/custom-table-cell-render/customer-status-cell.component";
import { DateCellComponent } from "../shared/custom-table-cell-render/date-cell.component";
import { EmailCellComponent } from "../shared/custom-table-cell-render/email-cell.component";
import { GenderCellComponent } from "../shared/custom-table-cell-render/gender-cell.component";
import { PhoneCellComponent } from "../shared/custom-table-cell-render/phone-cell.component";
import { ProcessStatusCellComponent } from "../shared/custom-table-cell-render/process-status-cell.component";
import { RemoveDialogComponent } from "../shared/remove-dialog/remove-dialog.component";
import { CustomerAddDialogComponent } from "./customer-add-dialog/customer-add-dialog.component";
import { CustomerSettingsDialogComponent } from "./customer-settings-dialog/customer-settings-dialog.component";

@Component({
  selector: "ngx-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent {
  settings: Record<string, any> = {
    selectMode: "multi",
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
      actions: {
        title: "Actions",
        type: "custom",
        width: "1%",
        renderComponent: ActionsCellComponent,
        sort: false,
        filter: false,
      },
    },
  };

  selectedRows: Customer[] = [];

  isAllSelected: boolean = false;

  source: LocalDataSource = new LocalDataSource();

  readonly actionSize: NbComponentSize = "medium";

  constructor(
    private service: SmartTableData,
    private dialogService: NbDialogService,
    private router: Router
  ) {
    const data = this.service.getData().customers;
    this.source.load(data);
    this.loadTableSettingsFromLocalStorage();
  }

  handleSelectedRow(row: {
    data: Customer | null;
    isSelected: boolean | null;
    source: LocalDataSource;
  }): void {
    if (isNull(row.data)) {
      this.isAllSelected = !this.isAllSelected;
      if (this.isAllSelected) {
        row.source.getAll().then((value) => (this.selectedRows = value));
      } else {
        this.selectedRows = [];
      }
    } else if (row.isSelected) {
      this.selectedRows.push(row.data);
    } else {
      remove(this.selectedRows, ["id", row.data.id]);
    }
  }

  addDialog() {
    this.dialogService.open(CustomerAddDialogComponent);
  }

  view() {
    if (this.selectedRows.length > 0) {
      this.router.navigate([
        `/pages/customers/details/${this.selectedRows[0].id}`,
      ]);
    }
  }

  removeDialog() {
    if (this.selectedRows.length > 0) {
      this.dialogService
        .open(RemoveDialogComponent)
        .onClose.subscribe((remove) => {
          if (remove) {
            this.source.remove(this.selectedRows[0]);
          }
        });
    }
  }

  settingsDialog() {
    this.dialogService
      .open(CustomerSettingsDialogComponent)
      .onClose.subscribe((settings) => {
        if (settings) {
          const { columns, hiddenColumns } = settings;
          this.settings = mapHideOrShowColumns(
            columns,
            this.settings,
            hiddenColumns
          );
          setItem(LOCAL_STORAGE_KEYS_FOR_TABLE.customers, columns);
        }
      });
  }

  reload() {
    this.source.refresh();
  }

  private loadTableSettingsFromLocalStorage() {
    const columns = getItem(LOCAL_STORAGE_KEYS_FOR_TABLE.customers);

    if (columns) {
      this.settings = mapShowColumns(columns, this.settings);
    }
  }
}
