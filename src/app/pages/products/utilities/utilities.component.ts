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

@Component({
  selector: "ngx-utilities",
  templateUrl: "./utilities.component.html",
  styleUrls: ["./utilities.component.scss"],
})
export class UtilitiesComponent {
  settings: Record<string, any> = {
    actions: false,
    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      type: {
        title: "Type",
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
      quantity: {
        title: "Quantity",
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
    },
  };

  hiddenColumns = ["price"];

  selectedColumns = [];

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData().utilities;
    this.source.load(data);
    this.loadTableSettingsFromLocalStorage();
  }

  handleSelectedColumns(columns: string[]): void {
    this.settings = mapHideOrShowColumns(
      columns,
      this.settings,
      this.hiddenColumns
    );
    setItem(LOCAL_STORAGE_KEYS_FOR_TABLE.utilities, columns);
  }

  private loadTableSettingsFromLocalStorage() {
    const columns = getItem(LOCAL_STORAGE_KEYS_FOR_TABLE.utilities);

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
