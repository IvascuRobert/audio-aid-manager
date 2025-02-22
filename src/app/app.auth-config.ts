import {
  NbAuthJWTToken,
  NbAuthOptions,
  NbPasswordAuthStrategy,
} from '@nebular/auth';
import { environment } from '../environments/environment';

export const AUTH_CONFIG: NbAuthOptions = {
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
};
