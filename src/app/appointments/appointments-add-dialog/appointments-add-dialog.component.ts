import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  Optional,
  inject,
} from '@angular/core';
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
  NbDatepickerModule,
  NbDialogRef,
  NbIconModule,
  NbInputModule,
  NbOptionModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTimepickerModule,
} from '@nebular/theme';
import { omit } from 'lodash-es';
import { NgxColorsModule } from 'ngx-colors';
import { BehaviorSubject, finalize, map } from 'rxjs';
import { Appointment, AppointmentForm } from '../../@core/data/appointment';
import { CustomerState } from '../../@core/data/customer';
import { DoctorState } from '../../@core/data/doctor';
import { Entity } from '../../@core/data/entity';
import { RoomState } from '../../@core/data/room';
import { CoreService } from '../../@core/services/core.service';
import { BaseForm } from '../../shared/directives/base-form.directive';

@Component({
  selector: 'app-appointments-add-dialog',
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
    NgxColorsModule,
    NbDatepickerModule,
    NbTimepickerModule,
  ],
  templateUrl: './appointments-add-dialog.component.html',
  styleUrl: './appointments-add-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentsAddDialogComponent extends BaseForm implements OnInit {
  coreService = inject(CoreService);

  destroyRef = inject(DestroyRef);

  form = new FormGroup<AppointmentForm>({
    userId: new FormControl(
      parseInt(this.coreService.user$.getValue()?.UserId ?? ''),
      { nonNullable: true }
    ),
    id: new FormControl(0, { nonNullable: true }),
    color: new FormControl('rgb(79, 195, 255)', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    customerId: new FormControl(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    doctorId: new FormControl(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    endReason: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    roomId: new FormControl(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    startDate: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    endDate: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  selected: Appointment | null = null;

  loading$ = new BehaviorSubject(false);

  entity!: Entity;

  doctors$ = this.coreService
    .getEntities$<DoctorState>(Entity.Doctor)
    .pipe(map(({ entities }) => Object.values(entities)));

  doctorsLoading$ = this.coreService
    .getEntities$<DoctorState>(Entity.Doctor)
    .pipe(map(({ loading }) => loading));

  rooms$ = this.coreService
    .getEntities$<RoomState>(Entity.Room)
    .pipe(map(({ entities }) => Object.values(entities)));

  roomsLoading$ = this.coreService
    .getEntities$<RoomState>(Entity.Room)
    .pipe(map(({ loading }) => loading));

  customers$ = this.coreService
    .getEntities$<CustomerState>(Entity.Customer)
    .pipe(map(({ entities }) => Object.values(entities)));

  customersLoading$ = this.coreService
    .getEntities$<CustomerState>(Entity.Customer)
    .pipe(map(({ loading }) => loading));

  get colorControl() {
    return this.form.controls.color;
  }

  get doctorIdControl() {
    return this.form.controls.doctorId;
  }

  get descriptionControl() {
    return this.form.controls.description;
  }

  get endReasonControl() {
    return this.form.controls.endReason;
  }

  get roomIdControl() {
    return this.form.controls.roomId;
  }

  get startDateControl() {
    return this.form.controls.startDate;
  }

  get titleControl() {
    return this.form.controls.title;
  }

  get endDateControl() {
    return this.form.controls.endDate;
  }

  get customersIdControl() {
    return this.form.controls.customerId;
  }

  constructor(
    @Optional() private ref: NbDialogRef<AppointmentsAddDialogComponent>
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.selected) {
      this.form.patchValue(this.selected);
    }

    this.getDoctors();
    this.getRooms();
    this.getCustomers();
  }

  close(fetchData = false) {
    this.ref.close(fetchData);
  }

  submit() {
    this.form.markAllAsTouched();
    console.log(this.form);
    if (this.form.valid && this.loading$.value === false) {
      if (this.selected) {
        this.update();
      } else {
        this.add();
      }
    }
  }

  private update(): void {
    this.loading$.next(true);
    this.coreService
      .put<
        Omit<
          Appointment,
          'status' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'
        >
      >(this.form.getRawValue(), this.entity)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }

  private add(): void {
    this.loading$.next(true);
    this.coreService
      .post<
        Omit<
          Appointment,
          | 'status'
          | 'createdAt'
          | 'updatedAt'
          | 'createdBy'
          | 'updatedBy'
          | 'id'
        >
      >(omit(this.form.getRawValue(), ['id']), this.entity)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading$.next(false);
          this.close(true);
        })
      )
      .subscribe();
  }

  private getDoctors() {
    this.coreService
      .get(Entity.Doctor)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  private getRooms() {
    this.coreService
      .get(Entity.Room)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  private getCustomers() {
    this.coreService
      .get(Entity.Customer)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
