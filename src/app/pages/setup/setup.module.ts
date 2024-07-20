import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbSpinnerModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { SharedModule } from "../shared/shared.module";
import { ClinicsComponent } from "./clinics/clinics.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LocationsComponent } from "./locations/locations.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { SetupRoutingModule } from "./setup-routing.module";
import { SetupComponent } from "./setup.component";
import { ClinicsAddDialogComponent } from './clinics-add-dialog/clinics-add-dialog.component';
import { DoctorsAddDialogComponent } from './doctors-add-dialog/doctors-add-dialog.component';
import { EmployeeAddDialogComponent } from './employee-add-dialog/employee-add-dialog.component';
import { LocationsAddDialogComponent } from './locations-add-dialog/locations-add-dialog.component';
import { RoomsAddDialogComponent } from './rooms-add-dialog/rooms-add-dialog.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    EmployeeComponent,
    RoomsComponent,
    LocationsComponent,
    ClinicsComponent,
    RoomsComponent,
    DoctorsComponent,
    SetupComponent,
    ClinicsAddDialogComponent,
    DoctorsAddDialogComponent,
    EmployeeAddDialogComponent,
    LocationsAddDialogComponent,
    RoomsAddDialogComponent,
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbSelectModule,
    SharedModule,
    NbDialogModule.forChild(),
    NbIconModule,
    ReactiveFormsModule,
    FormsModule,
    NbInputModule,
    NbDatepickerModule,
    NbFormFieldModule,
    NbSelectModule,
    NbRadioModule,
    NbButtonModule,
    NbSpinnerModule
  ],
})
export class SetupModule {}
