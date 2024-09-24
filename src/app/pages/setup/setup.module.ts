import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from '../shared/shared.module';
import { ClinicsAddDialogComponent } from './clinics-add-dialog/clinics-add-dialog.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { DoctorsAddDialogComponent } from './doctors-add-dialog/doctors-add-dialog.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { EmployeeAddDialogComponent } from './employee-add-dialog/employee-add-dialog.component';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsAddDialogComponent } from './rooms-add-dialog/rooms-add-dialog.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';
import { ShopsAddDialogComponent } from './shops-add-dialog/shops-add-dialog.component';
import { ShopsComponent } from './shops/shops.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    RoomsComponent,
    ClinicsComponent,
    RoomsComponent,
    DoctorsComponent,
    SetupComponent,
    ClinicsAddDialogComponent,
    DoctorsAddDialogComponent,
    EmployeeAddDialogComponent,
    RoomsAddDialogComponent,
    ShopsComponent,
    ShopsAddDialogComponent,
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
    NbSpinnerModule,
  ],
})
export class SetupModule {}
