import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
} from '@nebular/theme';
import { HeaderComponent } from './header/header.component';
import { CoreService } from '../@core/services/core.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NbLayoutModule,
    HeaderComponent,
    NbSidebarModule,
    NbMenuModule,
    RouterModule,
    NbActionsModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  #coreService = inject(CoreService);

  subheaderInformation = computed(() =>
    this.#coreService.subheaderInformation(),
  );

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
