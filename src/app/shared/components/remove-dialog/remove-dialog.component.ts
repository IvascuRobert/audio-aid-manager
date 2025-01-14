import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, Optional, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogRef,
  NbIconModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Entity } from '../../../@core/data/entity';
import { CoreService } from '../../../@core/services/core.service';

@Component({
  standalone: true,
  imports: [
    NbCardModule,
    NbIconModule,
    NbSpinnerModule,
    AsyncPipe,
    NbButtonModule,
  ],
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss'],
})
export class RemoveDialogComponent {
  destroyRef = inject(DestroyRef);

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  id!: number;

  constructor(
    @Optional() private ref: NbDialogRef<RemoveDialogComponent>,
    private coreService: CoreService
  ) {}

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  remove() {
    this.loading$.next(true);
    this.coreService
      .delete(this.id, this.entity)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }
}
