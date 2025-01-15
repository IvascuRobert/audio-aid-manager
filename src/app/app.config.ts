import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbAuthJWTToken,
  NbAuthModule,
  NbPasswordAuthStrategy,
} from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbTimepickerModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { environment } from '../environments/environment';
import { authInterceptor } from './@core/interceptors/auth.interceptor';
import { routes } from './app.routes';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { DARK_THEME } from './styles/theme.dark';
import { DEFAULT_THEME } from './styles/theme.default';

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
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
      NbAuthModule.forRoot({
        strategies: [
          NbPasswordAuthStrategy.setup({
            name: 'email',
            baseEndpoint: environment.apiUrl,
            login: {
              endpoint: '/User/login',
              method: 'post',
              requireValidToken: true,
              redirect: {
                success: '/',
                failure: null,
              },
              defaultErrors: [
                'Login/Email combination is not correct, please try again.',
              ],
              defaultMessages: ['You have been successfully logged in.'],
            },
            register: {
              endpoint: '/User/register',
              method: 'post',
              redirect: {
                success: '/auth/login',
                failure: null,
              },
              requireValidToken: false,
              defaultErrors: ['Something went wrong, please try again.'],
              defaultMessages: ['You have been successfully registered.'],
            },
            logout: {
              endpoint: '',
              redirect: {
                success: '/auth/login',
                failure: null,
              },
              defaultErrors: ['Something went wrong, please try again.'],
              defaultMessages: ['You have been successfully registered.'],
            },
            requestPass: {
              endpoint: '/User/forgot-password',
              method: 'post',
            },
            resetPass: {
              endpoint: '/User/reset-password',
              method: 'post',
            },
            token: {
              class: NbAuthJWTToken,
              key: 'token',
            },
          }),
        ],
        forms: {
          login: {
            redirectDelay: 0, // delay before redirect after a successful login, while success message is shown to the user
            strategy: 'email', // strategy id key.
            rememberMe: true, // whether to show or not the `rememberMe` checkbox
            showMessages: {
              // show/not show success/error messages
              success: true,
              error: true,
            },
          },
          register: {
            redirectDelay: 0,
            strategy: 'email',
            showMessages: {
              success: true,
              error: true,
            },
            terms: true,
          },
          requestPassword: {
            redirectDelay: 0,
            strategy: 'email',
            showMessages: {
              success: true,
              error: true,
            },
          },
          resetPassword: {
            redirectDelay: 0,
            strategy: 'email',
            showMessages: {
              success: true,
              error: true,
            },
          },
          logout: {
            redirectDelay: 0,
            strategy: 'email',
          },
          validation: {
            password: {
              required: true,
              minLength: 6,
              maxLength: 50,
            },
            email: {
              required: true,
            },
            fullName: {
              required: true,
              minLength: 6,
              maxLength: 50,
            },
          },
        },
      })
    ),
  ],
};
