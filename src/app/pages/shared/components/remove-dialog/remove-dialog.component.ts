import { Component, Optional } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Entity } from '../../../../@core/data/entity';
import { CoreService } from '../../../../@core/services/core.service';

@UntilDestroy()
@Component({
  selector: 'ngx-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss'],
})
export class RemoveDialogComponent {
  loading$ = new BehaviorSubject(false);

  entity: Entity | null = null;

  id: number | null = null;

  constructor(
    @Optional() private ref: NbDialogRef<RemoveDialogComponent>,
    private coreService: CoreService
  ) {}

  close() {
    this.ref.close();
  }

  remove() {
    this.loading$.next(true);
    this.coreService
      .delete(this.id, this.entity)
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close();
        })
      )
      .subscribe();
  }
}
