import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { User } from "../../../@core/data/user";
import { EmailCellComponent } from "../../shared/components/custom-table-cell-render/email-cell.component";
import { GenderCellComponent } from "../../shared/components/custom-table-cell-render/gender-cell.component";
import { RoleCellComponent } from "../../shared/components/custom-table-cell-render/role-cell.component";
import { BaseTable } from "../../shared/directives/base-table.directive";

@Component({
  selector: "ngx-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
})
export class EmployeeComponent extends BaseTable<User> {
  settings: Record<string, any> = {
    selectMode: "multi",
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

  constructor(
    private service: SmartTableData,
    protected readonly dialogService: NbDialogService
  ) {
    super(dialogService);
    const data = this.service.getData().users;
    this.source.load(data);
  }
}
