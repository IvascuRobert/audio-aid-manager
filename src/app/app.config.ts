import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbAuthModule } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbOverlayModule,
  NbSidebarModule,
  NbThemeModule,
  NbTimepickerModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { authInterceptor } from './@core/interceptors/auth.interceptor';
import { AUTH_CONFIG } from './app.auth-config';
import { routes } from './app.routes';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { DARK_THEME } from './styles/theme.dark';
import { DEFAULT_THEME } from './styles/theme.default';

// TO DO inject the themes in this way, Nebular didn't fix this issue yet
// export class ThemeModule {
//   static forRoot(): ModuleWithProviders<ThemeModule> {
//     return {
//       ngModule: ThemeModule,
//       providers: [
//         ...(NbThemeModule.forRoot(
//           {
//             name: 'default',
//           },
//           [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]
//         ).providers || []),
//       ],
//     };
//   }
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      NbEvaIconsModule,
      NbThemeModule.forRoot(
        {
          name: 'default',
        },
        [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]
      ),
      NbSidebarModule.forRoot(),
      NbMenuModule.forRoot(),
      NbDatepickerModule.forRoot(),
      NbDialogModule.forRoot(),
      NbWindowModule.forRoot(),
      NbTimepickerModule.forRoot(),
      NbToastrModule.forRoot(),
      NbOverlayModule.forRoot(),
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
      NbAuthModule.forRoot(AUTH_CONFIG)
    ),
  ],
};
