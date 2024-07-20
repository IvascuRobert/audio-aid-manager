import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Room } from "../../../@core/data/room";
import { SmartTableData } from "../../../@core/data/smart-table";
import { BaseTable } from "../../shared/directives/base-table.directive";
import { RoomsAddDialogComponent } from "../rooms-add-dialog/rooms-add-dialog.component";
import { ActionsCellComponent } from "../../shared/components/custom-table-cell-render/actions-cell.component";
import { Action } from "../../../@core/data/actions";

@Component({
  selector: "ngx-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.scss"],
})
export class RoomsComponent extends BaseTable<Room> {
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
                this.removeItemByRow(row)
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
    const data = this.service.getData().rooms;
    this.source.load(data);
  }

  addDialog() {
    this.dialogService.open(RoomsAddDialogComponent);
  }
}
