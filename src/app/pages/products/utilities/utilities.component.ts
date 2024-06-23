import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { SmartTableData } from "../../../@core/data/smart-table";
import { Utility } from "../../../@core/data/utility";
import { mapHideOrShowColumns } from "../../../@core/utils/map-hide-or-show-columns";
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  setItem,
} from "../../../@core/utils/save-local-storage";
import { ActionsCellComponent } from "../../shared/components/custom-table-cell-render/actions-cell.component";
import { PriceCellComponent } from "../../shared/components/custom-table-cell-render/price-cell.component";
import { BaseTable } from "../../shared/directives/base-table.directive";

@Component({
  selector: "ngx-utilities",
  templateUrl: "./utilities.component.html",
  styleUrls: ["./utilities.component.scss"],
})
export class UtilitiesComponent extends BaseTable<Utility> {
  settings: Record<string, any> = {
    selectMode: "multi",
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

  localStorageSettingsKey = LOCAL_STORAGE_KEYS_FOR_TABLE.utilities;

  hiddenColumns = ["price"];

  selectedColumns = [];

  constructor(
    private service: SmartTableData,
    protected readonly dialogService: NbDialogService
  ) {
    super(dialogService);
    const data = this.service.getData().utilities;
    this.source.load(data);
  }

  handleSelectedColumns(columns: string[]): void {
    this.settings = mapHideOrShowColumns(
      columns,
      this.settings,
      this.hiddenColumns
    );
    setItem(LOCAL_STORAGE_KEYS_FOR_TABLE.utilities, columns);
  }
}
