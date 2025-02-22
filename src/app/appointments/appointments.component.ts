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
  CalendarModule,
  CalendarView,
} from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { Subject, map, tap } from 'rxjs';
import { AppointmentState } from '../@core/data/appointment';
import { Entity } from '../@core/data/entity';
import { IsTodayPipe } from '../@core/pipes/is-today.pipe';
import { CoreService } from '../@core/services/core.service';
import { AppointmentsAddDialogComponent } from './appointments-add-dialog/appointments-add-dialog.component';
import { CustomDateFormatter } from './services/custom-date-formatter.provider';

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
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  appointments$ = this.coreService
    .getEntities$<AppointmentState>(Entity.Appointment)
    .pipe(map(({ entities }) => Object.values(entities)));

  appointmentsLoading$ = this.coreService
    .getEntities$<AppointmentState>(Entity.Appointment)
    .pipe(map(({ loading }) => loading));

  events: CalendarEvent[] = [];
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: { ...colors['red'] },
  //     actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true,
  //     },
  //     draggable: true,
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: { ...colors['yellow'] },
  //     actions: this.actions,
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: { ...colors['blue'] },
  //     allDay: true,
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: addHours(new Date(), 2),
  //     title: 'A draggable and resizable event',
  //     color: { ...colors['yellow'] },
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true,
  //     },
  //     draggable: true,
  //   },

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

    this.openCustomDialog(date);
  }

  hourSegmentClicked({
    date,
    sourceEvent,
  }: {
    date: Date;
    sourceEvent: MouseEvent;
  }): void {
    this.openCustomDialog(date);
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log(action, event);
  }

  addEvent(): void {
    // this.events = [
    //   ...this.events,
    //   {
    //     title: 'New event',
    //     start: startOfDay(new Date()),
    //     end: endOfDay(new Date()),
    //     color: colors['red'],
    //     draggable: true,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true,
    //     },
    //   },
    // ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    console.log(view);
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  openCustomDialog(startDate: Date) {
    this.dialogService
      .open(AppointmentsAddDialogComponent, {
        context: {
          entity: this.entity(),
          startDate,
        },
        closeOnBackdropClick: false,
      })
      .onClose.pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((fetchData: boolean) => {
          if (fetchData) {
            // TO DO implement refresh
          }
        })
      )
      .subscribe();
  }

  private getAppointments() {
    this.coreService
      .get(Entity.Appointment)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
