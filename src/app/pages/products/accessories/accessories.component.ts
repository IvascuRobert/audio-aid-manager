import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Accessory } from "../../../@core/data/accessory";
import { SmartTableData } from "../../../@core/data/smart-table";
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from "../../../@core/utils/save-local-storage";
import { AccessoryStatusCellComponent } from "../../shared/components/custom-table-cell-render/accessory-status-cell.component";
import { ActionsCellComponent } from "../../shared/components/custom-table-cell-render/actions-cell.component";
import { PriceCellComponent } from "../../shared/components/custom-table-cell-render/price-cell.component";
import { BaseTable } from "../../shared/directives/base-table.directive";

@Component({
  selector: "ngx-accessories",
  templateUrl: "./accessories.component.html",
  styleUrls: ["./accessories.component.scss"],
})
export class AccessoriesComponent extends BaseTable<Accessory> {
  settings: Record<string, any> = {
    selectMode: "multi",
    actions: false,
    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      status: {
        title: "Status",
        type: "custom",
        renderComponent: AccessoryStatusCellComponent,
      },
      group: {
        title: "Group",
        type: "string",
      },
      serialNumber: {
        title: "Serial number",
        type: "string",
      },
      name: {
        title: "Name",
        type: "string",
      },
      brand: {
        title: "Brand",
        type: "string",
      },
      type: {
        title: "Type",
        type: "string",
      },
      price: {
        title: "Price",
        type: "custom",
        renderComponent: PriceCellComponent,
        hide: true,
      },
      location: {
        title: "Location",
        type: "string",
      },
      customer: {
        title: "Customer",
        type: "string",
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

  localStorageSettingsKey = LOCAL_STORAGE_KEYS_FOR_TABLE.accessories;

  hiddenColumns = ["price"];

  selectedColumns = [];

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    protected readonly dialogService: NbDialogService
  ) {
    super(dialogService);
    const data = this.service.getData().accessories;
    this.source.load(data);
  }
}
