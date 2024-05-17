import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { DeviceTypeCellComponent } from "../../shared/custom-table-cell-render/device-type-cell.component";

@Component({
  selector: "ngx-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
})
export class DevicesComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
        editable: false,
        filter: false,
        sort: true,
        sortDirection: "desc",
      },
      firstName: {
        title: "First Name",
        type: "string",
      },
      lastName: {
        title: "Last Name",
        type: "string",
      },
      username: {
        title: "Username",
        type: "string",
      },
      email: {
        title: "E-mail",
        type: "string",
      },
      age: {
        title: "Age",
        type: "number",
      },
      status: {
        title: "Status",
        filter: {
          type: "list",
          config: {
            selectText: "Select...",
            list: [
              { value: "Glenna Reichert", title: "Glenna Reichert" },
              { value: "Kurtis Weissnat", title: "Kurtis Weissnat" },
              { value: "Chelsey Dietrich", title: "Chelsey Dietrich" },
            ],
          },
        },
      },
      type: {
        title: "Type",
        type: "custom",
        renderComponent: DeviceTypeCellComponent,
      },
      passed: {
        title: "Passed",
        filter: {
          type: "checkbox",
          config: {
            true: "Yes",
            false: "No",
            resetText: "clear",
          },
        },
      },
      actions: {
        title: "Age",
        type: "number",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
