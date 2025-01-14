import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NbLayoutModule,
    HeaderComponent,
    NbSidebarModule,
    NbMenuModule,
    RouterModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  menu = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'Customers',
      icon: 'people-outline',
      link: '/pages/customers',
    },
    {
      title: 'Appointments',
      icon: 'calendar-outline',
      link: '/pages/appointments',
    },
    {
      title: 'Products',
      icon: 'pie-chart-outline',
      children: [
        {
          title: 'Devices',
          link: '/pages/devices',
        },
        {
          title: 'Accessories',
          link: '/pages/accessories',
        },
        {
          title: 'Utilities',
          link: '/pages/utilities',
        },
        {
          title: 'Services',
          link: '/pages/services',
        },
      ],
    },
    {
      title: 'SETTINGS',
      group: true,
    },
    {
      title: 'Setup',
      icon: 'settings-2-outline',
      children: [
        {
          title: 'Employee',
          link: '/pages/employee',
        },
        {
          title: 'Rooms',
          link: '/pages/rooms',
        },
        {
          title: 'Shops',
          link: '/pages/shops',
        },
        {
          title: 'Clinics',
          link: '/pages/clinics',
        },
        {
          title: 'Doctors',
          link: '/pages/doctors',
        },
      ],
    },
  ];
}
