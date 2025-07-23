import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { switchMap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(NbAuthService);

  return authService.getToken().pipe(
    switchMap((token) => {
      const newRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token.getValue()}`,
        },
      });
      return next(newRequest);
    }),
  );
};
