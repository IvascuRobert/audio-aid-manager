import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Entity } from '../../../@core/data/entity';
import { Room } from '../../../@core/data/room';
import { CoreService } from '../../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@UntilDestroy()
@Component({
  selector: 'ngx-rooms-add-dialog',
  templateUrl: './rooms-add-dialog.component.html',
  styleUrls: ['./rooms-add-dialog.component.scss'],
})
export class RoomsAddDialogComponent extends BaseForm implements OnInit {
  roomsAddForm = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
  });

  selectedRoom: Room | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  get nameControl() {
    return this.roomsAddForm.controls.name;
  }

  constructor(
    @Optional() private ref: NbDialogRef<RoomsAddDialogComponent>,
    private fb: FormBuilder,
    private coreService: CoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selectedRoom)
      this.roomsAddForm.patchValue(this.selectedRoom as any);
  }

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  submit() {
    this.roomsAddForm.markAllAsTouched();
    if (this.roomsAddForm.valid && this.loading$.value === false) {
      if (this.selectedRoom) {
        this.updateRoom();
      } else {
        this.addRoom();
      }
    }
  }

  private updateRoom(): void {
    const room: Room = this.roomsAddForm.getRawValue() as Room;
    this.loading$.next(true);
    this.coreService
      .put(room, this.entity)
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }

  private addRoom(): void {
    const room: Room = this.roomsAddForm.getRawValue() as Room;
    this.loading$.next(true);
    this.coreService
      .post(room, this.entity)
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
