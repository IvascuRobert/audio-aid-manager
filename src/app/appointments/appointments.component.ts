import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbDialogService,
  NbIconModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTooltipModule,
} from '@nebular/theme';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarEventTitleFormatter,
  CalendarModule,
  CalendarView,
} from 'angular-calendar';
import { isSameDay, isSameMonth, parseISO } from 'date-fns';
import { Subject, finalize, map, tap } from 'rxjs';
import {
  Appointment,
  AppointmentApiResponse,
  AppointmentState,
} from '../@core/data/appointment';
import { Entity } from '../@core/data/entity';
import { IsTodayPipe } from '../@core/pipes/is-today.pipe';
import { CoreService } from '../@core/services/core.service';
import { AppointmentsAddDialogComponent } from './appointments-add-dialog/appointments-add-dialog.component';
import { CustomDateFormatter } from './services/custom-date-formatter.provider';
import { CustomEventTitleFormatter } from './services/custom-event-title-formatter.provider';
import { RemoveDialogComponent } from '../shared/components/remove-dialog/remove-dialog.component';

enum CalendarAction {
  DELETE = 'DELETE',
  EDIT = 'EDIT',
}

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [
    CalendarModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbIconModule,
    NbSelectModule,
    JsonPipe,
    IsTodayPipe,
    NgFor,
    FormsModule,
    NbTooltipModule,
    AsyncPipe,
    NbSpinnerModule,
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter,
    },
  ],
})
export class AppointmentsComponent implements OnInit {
  dialogService = inject(NbDialogService);

  destroyRef = inject(DestroyRef);

  coreService = inject(CoreService);

  readonly entity = signal<Entity>(Entity.Appointment);

  view: CalendarView = CalendarView.Month;

  calendarViewTpl = CalendarView;

  viewDate: Date = new Date();

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent(CalendarAction.EDIT, event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent(CalendarAction.DELETE, event);
      },
    },
  ];

  refresh = new Subject<void>();

  appointments$ = this.coreService
    .getEntities$<AppointmentState>(Entity.Appointment)
    .pipe(
      map(({ entities }) => Object.values(entities)),
      map((res) => this.#mapAppointmentsToCalendarEvent(res)),
      tap((res) => {
        console.log({ res });
      })
    );

  appointmentsLoading$ = this.coreService
    .getEntities$<AppointmentState>(Entity.Appointment)
    .pipe(map(({ loading }) => loading));

  activeDayIsOpen: boolean = true;

  ngOnInit(): void {
    this.getAppointments();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  handleEvent(action: CalendarAction, event: CalendarEvent<Appointment>): void {
    console.log(action, event);
    switch (action) {
      case CalendarAction.EDIT:
        this.openAddAppointmentDialog(event.meta);
        break;

      case CalendarAction.DELETE:
        this.openRemoveDialog(event.meta?.id!);
        break;
      default:
        break;
    }
  }

  openRemoveDialog(id?: number) {
    if (id) {
      this.dialogService
        .open(RemoveDialogComponent, {
          context: {
            entity: this.entity(),
            id,
          },
          closeOnBackdropClick: false,
        })
        .onClose.pipe(
          takeUntilDestroyed(this.destroyRef),
          tap((fetchData: boolean) => {
            if (fetchData) this.getAppointments();
          })
        )
        .subscribe();
    }
  }

  setView(view: CalendarView) {
    console.log(view);
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  openAddAppointmentDialog(value?: Appointment): void {
    this.dialogService
      .open(AppointmentsAddDialogComponent, {
        context: {
          entity: this.entity(),
          startDate: new Date(),
          selected: value,
        },
        closeOnBackdropClick: false,
      })
      .onClose.pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((fetchData: boolean) => {
          if (fetchData) this.getAppointments();
        })
      )
      .subscribe();
  }

  getAppointments(): void {
    this.coreService
      .get<AppointmentApiResponse[]>(Entity.Appointment)
      .pipe(
        finalize(() => this.refresh.next()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  #mapAppointmentsToCalendarEvent(
    appointment: AppointmentApiResponse[]
  ): CalendarEvent<AppointmentApiResponse>[] {
    return appointment.map((item) => {
      const startDate = parseISO(item.startDate);
      const endDate = parseISO(item.endDate);

      return {
        start: startDate,
        end: endDate,
        title: item.title,
        color: {
          primary: this.#rgbToHex(item.color),
          secondary: '#D1ECF1',
        },
        actions: [...this.actions],
        allDay: false,
        resizable: {
          beforeStart: false,
          afterEnd: false,
        },
        draggable: false,
        meta: item,
      };
    });
  }

  #rgbToHex(rgb: string): string {
    const result = rgb.match(/\d+/g);
    if (!result) return '#000000';

    return (
      '#' +
      result.map((val) => parseInt(val).toString(16).padStart(2, '0')).join('')
    );
  }
}
