import { Component } from '@angular/core';
import { Entity } from '../../@core/data/entity';
import { CommentCellComponent } from '../../shared/components/custom-table-cell-render/comment-cell.component';
import { DateCellComponent } from '../../shared/components/custom-table-cell-render/date-cell.component';
import { ProcessStatusCellComponent } from '../../shared/components/custom-table-cell-render/process-status-cell.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { ProcessAddDialogComponent } from '../process-add-dialog/process-add-dialog.component';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss'],
  standalone: true,
  imports: [TableComponent],
})
export class ProcessDetailsComponent {
  entity = Entity.Process;

  settings: Record<string, any> = {
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
      currentLeftEarDeviceName: {
        title: 'Current left ear device name',
        type: 'string',
      },
      leftEarDeviceDuration: {
        title: 'Left ear device duration',
        type: 'string',
      },
      rightEarValue: {
        title: 'Right ear value',
        type: 'number',
      },
      currentRightEarDeviceName: {
        title: 'Current right ear device name',
        type: 'string',
      },
      rightEarDeviceDuration: {
        title: 'Right ear device duration',
        type: 'string',
      },
      questionnaire: {
        title: 'Questionnaire',
        type: 'number',
      },
      reason: {
        title: 'Reason',
        type: 'custom',
        renderComponent: CommentCellComponent,
      },
      comment: {
        title: 'Comment',
        type: 'custom',
        renderComponent: CommentCellComponent,
      },
      createdAt: {
        title: 'Last status update',
        type: 'custom',
        renderComponent: DateCellComponent,
      },
    },
  };

  dialogTemplateRef = ProcessAddDialogComponent;
}
