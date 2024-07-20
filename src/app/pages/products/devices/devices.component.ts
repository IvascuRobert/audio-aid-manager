import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Device } from "../../../@core/data/device";
import { SmartTableData } from "../../../@core/data/smart-table";
import { LOCAL_STORAGE_KEYS_FOR_TABLE } from "../../../@core/utils/save-local-storage";
import { AccessoryStatusCellComponent } from "../../shared/components/custom-table-cell-render/accessory-status-cell.component";
import { ActionsCellComponent } from "../../shared/components/custom-table-cell-render/actions-cell.component";
import { ColorCellComponent } from "../../shared/components/custom-table-cell-render/color-cell.component";
import { PriceCellComponent } from "../../shared/components/custom-table-cell-render/price-cell.component";
import { BaseTable } from "../../shared/directives/base-table.directive";
import { DevicesAddDialogComponent } from "../devices-add-dialog/devices-add-dialog.component";
import { Action } from "../../../@core/data/actions";

@Component({
  selector: "ngx-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
})
export class DevicesComponent extends BaseTable<Device> {
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
            });
        },
        sort: false,
        filter: false,
      },
    },
  };

  localStorageSettingsKey = LOCAL_STORAGE_KEYS_FOR_TABLE.devices;

  hiddenColumns = ["aslGroup", "location", "price", "customer"];

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    protected readonly dialogService: NbDialogService
  ) {
    super(dialogService);
    const data = this.service.getData().devices;
    this.source.load(data);
  }

  addDialog() {
    this.dialogService.open(DevicesAddDialogComponent);
  }
}
