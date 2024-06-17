import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { mapHideOrShowColumns } from "../../../@core/utils/map-hide-or-show-columns";
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  getItem,
  setItem,
} from "../../../@core/utils/save-local-storage";
import { AccessoryStatusCellComponent } from "../../shared/custom-table-cell-render/accessory-status-cell.component";
import { PriceCellComponent } from "../../shared/custom-table-cell-render/price-cell.component";

@Component({
  selector: "ngx-accessories",
  templateUrl: "./accessories.component.html",
  styleUrls: ["./accessories.component.scss"],
})
export class AccessoriesComponent {
  settings: Record<string, any> = {
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
    },
  };

  hiddenColumns = ["price"];

  selectedColumns = [];

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData().accessories;
    this.source.load(data);
    this.loadTableSettingsFromLocalStorage();
  }

  handleSelectedColumns(columns: string[]): void {
    this.settings = mapHideOrShowColumns(
      columns,
      this.settings,
      this.hiddenColumns
    );
    setItem(LOCAL_STORAGE_KEYS_FOR_TABLE.accessories, columns);
  }

  private loadTableSettingsFromLocalStorage() {
    const columns = getItem(LOCAL_STORAGE_KEYS_FOR_TABLE.accessories);

    if (columns) {
      this.settings = mapHideOrShowColumns(
        columns,
        this.settings,
        this.hiddenColumns
      );
      this.selectedColumns = columns;
    }
  }
}
