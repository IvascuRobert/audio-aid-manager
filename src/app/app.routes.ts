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
        title: 'Dashboard',
        data: {
          subHeaderTitle: 'Dashboard',
        },
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        title: 'Employee',
        data: {
          subHeaderTitle: 'Employee',
        },
      },
      {
        path: 'rooms',
        component: RoomsComponent,
        title: 'Rooms',
        data: {
          subHeaderTitle: 'Rooms',
        },
      },
      {
        path: 'shops',
        component: ShopsComponent,
        title: 'Shops',
        data: {
          subHeaderTitle: 'Shops',
        },
      },
      {
        path: 'clinics',
        component: ClinicsComponent,
        title: 'Clinics',
        data: {
          subHeaderTitle: 'Clinics',
        },
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
        title: 'Doctors',
        data: {
          subHeaderTitle: 'Doctors',
        },
      },
      {
        path: 'devices',
        component: DevicesComponent,
        title: 'Devices',
        data: {
          subHeaderTitle: 'Devices',
        },
      },
      {
        path: 'accessories',
        component: AccessoriesComponent,
        title: 'Accessories',
        data: {
          subHeaderTitle: 'Accessories',
        },
      },
      {
        path: 'utilities',
        component: UtilitiesComponent,
        title: 'Utilities',
        data: {
          subHeaderTitle: 'Utilities',
        },
      },
      {
        path: 'services',
        component: ServicesComponent,
        title: 'Services',
        data: {
          subHeaderTitle: 'Services',
        },
      },
      {
        path: 'customers',
        loadComponent: () =>
          import(`./customers/customers.component`).then(
            (mod) => mod.CustomersComponent,
          ),
        title: 'Customers',
        data: {
          subHeaderTitle: 'Customers',
        },
      },
      {
        path: 'customers/details/:customerId',
        component: ProcessDetailsComponent,
        title: 'Processes',
        data: {
          subHeaderTitle: 'Processes',
        },
      },
      {
        path: 'customers/details/:customerId/order/:processId',
        component: OrderComponent,
        title: 'Orders',
        data: {
          subHeaderTitle: 'Orders',
        },
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
        title: 'Appointments',
        data: {
          subHeaderTitle: 'Appointments',
        },
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
