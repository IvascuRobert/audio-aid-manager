import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClinicsComponent } from './clinics/clinics.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SetupComponent } from './setup.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  {
    path: '',
    component: SetupComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'rooms',
        component: RoomsComponent,
      },
      {
        path: 'shops',
        component: ShopsComponent,
      },
      {
        path: 'clinics',
        component: ClinicsComponent,
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupRoutingModule {}
