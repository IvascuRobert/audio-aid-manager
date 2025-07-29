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
import { OrderDetailsComponent } from './customers/order-details/order-details.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        title: 'Employee',
      },
      {
        path: 'rooms',
        component: RoomsComponent,
        title: 'Rooms',
      },
      {
        path: 'shops',
        component: ShopsComponent,
        title: 'Shops',
      },
      {
        path: 'clinics',
        component: ClinicsComponent,
        title: 'Clinics',
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
        title: 'Doctors',
      },
      {
        path: 'devices',
        component: DevicesComponent,
        title: 'Devices',
      },
      {
        path: 'accessories',
        component: AccessoriesComponent,
        title: 'Accessories',
      },
      {
        path: 'utilities',
        component: UtilitiesComponent,
        title: 'Utilities',
      },
      {
        path: 'services',
        component: ServicesComponent,
        title: 'Services',
      },
      {
        path: 'customers',
        loadComponent: () =>
          import(`./customers/customers.component`).then(
            (mod) => mod.CustomersComponent,
          ),
        title: 'Customers',
      },
      {
        path: 'customers/:customerId/process',
        component: ProcessDetailsComponent,
        title: 'Processes',
      },
      {
        path: 'customers/:customerId/process/:processId/order',
        component: OrderComponent,
        title: 'Orders',
      },
      {
        path: 'customers/:customerId/process/:processId/detail',
        component: OrderDetailsComponent,
        title: 'Orders details',
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
        title: 'Appointments',
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
