import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LocalDataSource } from 'ng2-smart-table';
import { tap } from 'rxjs/operators';
import { Action } from '../../../@core/data/actions';
import { Entity } from '../../../@core/data/entity';
import { Process } from '../../../@core/data/process';
import { CoreService } from '../../../@core/services/core.service';
import { ActionsCellComponent } from '../../shared/components/custom-table-cell-render/actions-cell.component';
import { CommentCellComponent } from '../../shared/components/custom-table-cell-render/comment-cell.component';
import { DateCellComponent } from '../../shared/components/custom-table-cell-render/date-cell.component';
import { ProcessStatusCellComponent } from '../../shared/components/custom-table-cell-render/process-status-cell.component';
import { BaseTable } from '../../shared/directives/base-table.directive';
import { CustomerDetailsAddDialogComponent } from '../customer-details-add-dialog/customer-details-add-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ngx-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent extends BaseTable<Process> {
  override entity = Entity.Process;

  override settings: Record<string, any> = {
    selectMode: 'multi',
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '1%',
      },
      status: {
        title: 'Status',
        type: 'custom',
        renderComponent: ProcessStatusCellComponent,
      },
      leftEarValue: {
        title: 'Left ear value',
        type: 'number',
      },
      leftEarDevice: {
        title: 'Left ear device',
        type: 'string',
      },
      rightEarValue: {
        title: 'Right ear value',
        type: 'number',
      },
      rightEarDevice: {
        title: 'Right ear device',
        type: 'string',
      },
      questionnaire: {
        title: 'Questionnaire',
        type: 'number',
      },
      reason: {
        title: 'Reason',
        type: 'string',
      },
      comment: {
        title: 'Comment',
        type: 'custom',
        renderComponent: CommentCellComponent,
      },
      lastStatusUpdate: {
        title: 'Last status update',
        type: 'custom',
        renderComponent: DateCellComponent,
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        width: '1%',
        renderComponent: ActionsCellComponent,
        valuePrepareFunction: (value: any, row: Process, cell: any) => row,
        onComponentInitFunction: (instance: ActionsCellComponent) => {
          instance.actionChange
            .pipe(
              untilDestroyed(this),
              tap(({ action, row }) => {
                switch (action) {
                  case Action.Delete:
                    this.openRemoveDialog(row.id);
                    break;

                  case Action.Edit:
                    this.editDialog(row);
                    break;
                  default:
                    break;
                }
              })
            )
            .subscribe();
        },
        sort: false,
        filter: false,
      },
    },
  };

  override source: LocalDataSource = new LocalDataSource();

  override dialogTemplateRef = CustomerDetailsAddDialogComponent;

  constructor(
    override readonly dialogService: NbDialogService,
    coreService: CoreService
  ) {
    super(coreService, dialogService);
  }
}
