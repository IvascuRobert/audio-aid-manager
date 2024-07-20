import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Location } from "../../../@core/data/location";
import { SmartTableData } from "../../../@core/data/smart-table";
import { BaseTable } from "../../shared/directives/base-table.directive";
import { LocationsAddDialogComponent } from "../locations-add-dialog/locations-add-dialog.component";
import { ActionsCellComponent } from "../../shared/components/custom-table-cell-render/actions-cell.component";
import { Action } from "../../../@core/data/actions";

@Component({
  selector: "ngx-locations",
  templateUrl: "./locations.component.html",
  styleUrls: ["./locations.component.scss"],
})
export class LocationsComponent extends BaseTable<Location> {
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
      address: {
        title: "Address",
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
                this.removeItemByRow(row)
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
    const data = this.service.getData().locations;
    this.source.load(data);
  }

  addDialog(row) {
    this.dialogService.open(LocationsAddDialogComponent, {
      context: { selectedLocation: row}
    });
  }
}
