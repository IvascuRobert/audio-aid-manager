import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";

@Component({
  selector: "ngx-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"],
})
export class DoctorsComponent {
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
    const data = this.service.getData().doctors;
    this.source.load(data);
  }
}
