import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";

@Component({
  selector: "ngx-clinics",
  templateUrl: "./clinics.component.html",
  styleUrls: ["./clinics.component.scss"],
})
export class ClinicsComponent {
  settings: Record<string, any> = {
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

  constructor(private service: SmartTableData) {
    const data = this.service.getData().clinics;
    this.source.load(data);
  }
}
