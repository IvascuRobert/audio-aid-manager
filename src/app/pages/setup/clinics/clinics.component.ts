import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Clinic } from "../../../@core/data/clinic";
import { SmartTableData } from "../../../@core/data/smart-table";
import { BaseTable } from "../../shared/directives/base-table.directive";
import { ClinicsAddDialogComponent } from "../clinics-add-dialog/clinics-add-dialog.component";
import { ActionsCellComponent } from "../../shared/components/custom-table-cell-render/actions-cell.component";
import { Action } from "../../../@core/data/actions";

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
      actions: {
        title: "Actions",
        type: "custom",
        width: "1%",
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value, row, cell) => row,
        onComponentInitFunction: (instance) => {
          instance.actionChange
            .subscribe( ({action, row}) => {
              if(action === Action.Delete){
                this.removeItem(row)
              }
              if(action === Action.Edit){
                this.addDialog(row)
              }
            });
        },
        sort: false,
        filter: false,
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

  addDialog(row) {
    this.dialogService.open(ClinicsAddDialogComponent, {
      context: { selectedLocation: row}
    });
  }
}
