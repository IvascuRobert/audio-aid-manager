import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Clinic } from "../../../@core/data/clinic";
import { SmartTableData } from "../../../@core/data/smart-table";
import { BaseTable } from "../../shared/directives/base-table.directive";

@Component({
  selector: "ngx-clinics",
  templateUrl: "./clinics.component.html",
  styleUrls: ["./clinics.component.scss"],
})
export class ClinicsComponent extends BaseTable<Clinic> {
  settings: Record<string, any> = {
    selectMode: "multi",
    actions: false,
    columns: {
      id: {
        title: "ID",
        type: "number",
        width: "10%",
      },
      name: {
        title: "Name",
        type: "string",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    protected readonly dialogService: NbDialogService
  ) {
    super(dialogService);
    const data = this.service.getData().clinics;
    this.source.load(data);
  }
}
