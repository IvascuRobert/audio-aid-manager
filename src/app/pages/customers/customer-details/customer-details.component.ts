import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Process } from "../../../@core/data/process";
import { SmartTableData } from "../../../@core/data/smart-table";
import { ActionsCellComponent } from "../../shared/components/custom-table-cell-render/actions-cell.component";
import { CommentCellComponent } from "../../shared/components/custom-table-cell-render/comment-cell.component";
import { DateCellComponent } from "../../shared/components/custom-table-cell-render/date-cell.component";
import { ProcessStatusCellComponent } from "../../shared/components/custom-table-cell-render/process-status-cell.component";
import { BaseTable } from "../../shared/directives/base-table.directive";
import { Action } from "../../../@core/data/actions";

@Component({
  selector: "ngx-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.scss"],
})
export class CustomerDetailsComponent extends BaseTable<Process> {
  settings: Record<string, any> = {
    selectMode: "multi",
    actions: false,
    columns: {
      id: {
        title: "ID",
        type: "number",
        width: "1%",
      },
      status: {
        title: "Status",
        type: "custom",
        renderComponent: ProcessStatusCellComponent,
      },
      leftEarValue: {
        title: "Left ear value",
        type: "number",
      },
      leftEarDevice: {
        title: "Left ear device",
        type: "string",
      },
      rightEarValue: {
        title: "Right ear value",
        type: "number",
      },
      rightEarDevice: {
        title: "Right ear device",
        type: "string",
      },
      questionnaire: {
        title: "Questionnaire",
        type: "number",
      },
      reason: {
        title: "Reason",
        type: "string",
      },
      comment: {
        title: "Comment",
        type: "custom",
        renderComponent: CommentCellComponent,
      },
      lastStatusUpdate: {
        title: "Last status update",
        type: "custom",
        renderComponent: DateCellComponent,
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
    const data = this.service.getData().processes;
    this.source.load(data);
  }
}
