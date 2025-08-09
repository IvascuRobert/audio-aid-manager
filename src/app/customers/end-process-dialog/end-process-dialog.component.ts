import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit, Optional, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogRef,
  NbIconModule,
  NbInputModule,
  NbOptionModule,
  NbSelectModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { BehaviorSubject, finalize } from 'rxjs';
import { Entity } from '../../@core/data/entity';
import {
  EndProcessApi,
  EndProcessForm,
  Process,
} from '../../@core/data/process';
import { CoreService } from '../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';
import { ProcessStatusType } from '../../@core/data/customer';

@Component({
  selector: 'app-end-process-dialog',
  templateUrl: './end-process-dialog.component.html',
  styleUrls: ['./end-process-dialog.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSpinnerModule,
    AsyncPipe,
    NgIf,
    NgFor,
    NbButtonModule,
    NbOptionModule,
    NbSelectModule,
  ],
})
export class EndProcessDialogComponent extends BaseForm implements OnInit {
  coreService = inject(CoreService);

  destroyRef = inject(DestroyRef);

  form = new FormGroup<EndProcessForm>({
    reason: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: Process | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  gender$ = this.coreService.gender$;

  get reasonControl() {
    return this.form.controls.reason;
  }

  constructor(@Optional() private ref: NbDialogRef<EndProcessDialogComponent>) {
    super();
  }

  ngOnInit(): void {
    if (this.selected) {
      this.form.patchValue(this.selected);
    }
  }

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid && this.loading$.value === false) {
      if (this.selected) {
        this.update();
      }
    }
  }

  private update(): void {
    this.loading$.next(true);

    if (this.selected)
      this.coreService
        .put<Process>(
          {
            ...this.selected,
            status: this.processStatusByExceededValue(),
            reason: this.reasonControl.value,
          },
          this.entity,
        )
        .pipe(
          takeUntilDestroyed(this.destroyRef),
          finalize(() => {
            this.loading$.next(false);
            this.close(true);
          }),
        )
        .subscribe();
  }

  private processStatusByExceededValue(): ProcessStatusType {
    const isExceedTheNormalValue =
      [
        this.selected?.leftEarValue ?? 0,
        this.selected?.rightEarValue ?? 0,
      ].filter((value) => value > 25).length > 0;

    return isExceedTheNormalValue
      ? ProcessStatusType.lost
      : ProcessStatusType.end;
  }
}
