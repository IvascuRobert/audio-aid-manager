import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Service } from "../../../@core/data/service";
import { SmartTableData } from "../../../@core/data/smart-table";
import { ActionsCellComponent } from "../../shared/components/custom-table-cell-render/actions-cell.component";
import { PriceCellComponent } from "../../shared/components/custom-table-cell-render/price-cell.component";
import { BaseTable } from "../../shared/directives/base-table.directive";
import { ServicesAddDialogComponent } from "../services-add-dialog/services-add-dialog.component";
import { Action } from "../../../@core/data/actions";

@Component({
  selector: "ngx-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent extends BaseTable<Service> {
  settings = {
    selectMode: "multi",
    actions: false,
    columns: {
      id: {
        title: "ID",
        type: "number",
        width: "1%",
      },
      name: {
        title: "Name",
        type: "string",
      },
      price: {
        title: "Price",
        type: "custom",
        renderComponent: PriceCellComponent,
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
    const data = this.service.getData().services;
    this.source.load(data);
  }

  addDialog() {
    this.dialogService.open(ServicesAddDialogComponent);
  }
}
