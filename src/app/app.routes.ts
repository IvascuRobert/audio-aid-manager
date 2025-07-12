import { Routes } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AppointmentsComponent } from './appointments/appointments.component';
import { OrderComponent } from './customers/order/order.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AccessoriesComponent } from './products/accessories/accessories.component';
import { DevicesComponent } from './products/devices/devices.component';
import { ServicesComponent } from './products/services/services.component';
import { UtilitiesComponent } from './products/utilities/utilities.component';
import { ClinicsComponent } from './setup/clinics/clinics.component';
import { DoctorsComponent } from './setup/doctors/doctors.component';
import { EmployeeComponent } from './setup/employee/employee.component';
import { RoomsComponent } from './setup/rooms/rooms.component';
import { ShopsComponent } from './setup/shops/shops.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProcessDetailsComponent } from './customers/process-details/process-details.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
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
      {
        path: 'devices',
        component: DevicesComponent,
      },
      {
        path: 'accessories',
        component: AccessoriesComponent,
      },
      {
        path: 'utilities',
        component: UtilitiesComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'customers',
        loadComponent: () =>
          import(`./customers/customers.component`).then(
            (mod) => mod.CustomersComponent
          ),
      },
      {
        path: 'customers/details/:customerId',
        component: ProcessDetailsComponent,
      },
      {
        path: 'customers/details/:customerId/order/:processId',
        component: OrderComponent,
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
