import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  CalendarDateFormatter,
  CalendarModule,
  CalendarMomentDateFormatter,
} from "angular-calendar";
import { AppointmentsRoutingModule } from "./appointments-routing.module";
import { AppointmentsComponent } from "./appointments.component";

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppointmentsRoutingModule,
    CalendarModule
  ],
  providers: [
    { provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter },
  ],
})
export class AppointmentsModule {}
