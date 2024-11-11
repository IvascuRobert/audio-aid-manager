import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs-compat';
import { finalize } from 'rxjs/operators';
import { Entity } from '../../../@core/data/entity';
import {
  EndProcessApi,
  EndProcessForm,
  Process,
} from '../../../@core/data/process';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'ngx-end-process-dialog',
  templateUrl: './end-process-dialog.component.html',
  styleUrls: ['./end-process-dialog.component.scss'],
})
export class EndProcessDialogComponent extends BaseForm implements OnInit {
  form = new FormGroup<EndProcessForm>({
    id: new FormControl(0, { nonNullable: true }),
    reason: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    customerId: new FormControl(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: Process | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  params: Record<string, string> | null = null;

  gender$ = this.coreService.gender$;

  get reasonControl() {
    return this.form.controls.reason;
  }

  get idControl() {
    return this.form.controls.id;
  }

  get customerIdControl() {
    return this.form.controls.customerId;
  }

  constructor(
    @Optional() private ref: NbDialogRef<EndProcessDialogComponent>,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selected) {
      this.form.patchValue(this.selected);
    }

    if (this.params) {
      this.customerIdControl.setValue(parseFloat(this.params['customerId']));
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
    this.coreService
      .patch<EndProcessApi>(
        `${this.idControl.value}/end`,
        this.form.getRawValue(),
        this.entity
      )
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }
}
