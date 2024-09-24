import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
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
        link: '/pages/products/devices',
      },
      {
        title: 'Accessories',
        link: '/pages/products/accessories',
      },
      {
        title: 'Utilities',
        link: '/pages/products/utilities',
      },
      {
        title: 'Services',
        link: '/pages/products/services',
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
        link: '/pages/setup/employee',
      },
      {
        title: 'Rooms',
        link: '/pages/setup/rooms',
      },
      {
        title: 'Shops',
        link: '/pages/setup/shops',
      },
      {
        title: 'Clinics',
        link: '/pages/setup/clinics',
      },
      {
        title: 'Doctors',
        link: '/pages/setup/doctors',
      },
    ],
  },
  // {
  //   title: "Auth",
  //   icon: "lock-outline",
  //   children: [
  //     {
  //       title: "Login",
  //       link: "/auth/login",
  //     },
  //     {
  //       title: "Register",
  //       link: "/auth/register",
  //     },
  //     {
  //       title: "Request Password",
  //       link: "/auth/request-password",
  //     },
  //     {
  //       title: "Reset Password",
  //       link: "/auth/reset-password",
  //     },
  //   ],
  // },
];
