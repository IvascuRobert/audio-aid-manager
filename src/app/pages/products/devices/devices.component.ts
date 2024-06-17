import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { mapHideOrShowColumns } from "../../../@core/utils/map-hide-or-show-columns";
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  getItem,
  setItem,
} from "../../../@core/utils/save-local-storage";
import { PriceCellComponent } from "../../shared/custom-table-cell-render/price-cell.component";
import { ColorCellComponent } from '../../shared/custom-table-cell-render/color-cell.component';
import { AccessoryStatusCellComponent } from '../../shared/custom-table-cell-render/accessory-status-cell.component';

@Component({
  selector: "ngx-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
})
export class DevicesComponent {
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
      brand: {
        title: "Brand",
        type: "string",
      },
      name: {
        title: "Name",
        type: "string",
      },
      serialNumber: {
        title: "Serial Number",
        type: "string",
      },
      type: {
        title: "Type",
        type: "string",
      },
      battery: {
        title: "Battery",
        type: "string",
      },
      qualityLevel: {
        title: "Quality Level",
        type: "string",
      },
      color: {
        title: "Color",
        type: "custom",
        renderComponent: ColorCellComponent,
      },
      aslGroup: {
        title: "ASL Group",
        type: "string",
        hide: true,
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
        hide: true,
      },
      customer: {
        title: "Customer",
        type: "string",
        hide: true,
      },
    },
  };

  hiddenColumns = ["aslGroup", "location", "price", "customer"];

  selectedColumns = [];

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData().devices;
    this.source.load(data);
    this.loadTableSettingsFromLocalStorage();
  }

  handleSelectedColumns(columns: string[]): void {
    this.settings = mapHideOrShowColumns(
      columns,
      this.settings,
      this.hiddenColumns
    );
    setItem(LOCAL_STORAGE_KEYS_FOR_TABLE.devices, columns);
  }

  private loadTableSettingsFromLocalStorage() {
    const columns = getItem(LOCAL_STORAGE_KEYS_FOR_TABLE.devices);

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
