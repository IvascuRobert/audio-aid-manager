import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ClinicsComponent } from "./clinics/clinics.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LocationsComponent } from "./locations/locations.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { SetupRoutingModule } from "./setup-routing.module";
import { SetupComponent } from "./setup.component";

@NgModule({
  declarations: [
    EmployeeComponent,
    RoomsComponent,
    LocationsComponent,
    ClinicsComponent,
    RoomsComponent,
    DoctorsComponent,
    SetupComponent,
  ],
  imports: [CommonModule, SetupRoutingModule],
})
export class SetupModule {}
