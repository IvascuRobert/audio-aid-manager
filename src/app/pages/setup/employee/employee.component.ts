import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { GenderCellComponent } from '../../shared/custom-table-cell-render/gender-cell.component';
import { EmailCellComponent } from '../../shared/custom-table-cell-render/email-cell.component';
import { RoleCellComponent } from '../../shared/custom-table-cell-render/role-cell.component';

@Component({
  selector: "ngx-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
})
export class EmployeeComponent {
  settings: Record<string, any> = {
    actions: false,
    columns: {
      id: {
        title: "ID",
        type: "number",
        width: "10%",
      },
      email: {
        title: "Email",
        type: "custom",
        renderComponent: EmailCellComponent,
      },
      gender: {
        title: "Gender",
        type: "custom",
        renderComponent: GenderCellComponent,
      },
      name: {
        title: "Name",
        type: "string",
      },
      password: {
        title: "Password",
        type: "string",
      },
      role: {
        title: "Role",
        type: "custom",
        renderComponent: RoleCellComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData().users;
    this.source.load(data);
  }
}
