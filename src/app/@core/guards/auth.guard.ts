import { inject } from "@angular/core";
import { ActivatedRoute, CanActivateFn, Router } from "@angular/router";
import { NbAuthService } from "@nebular/auth";
import { tap } from "rxjs/operators";

export const authGuard: CanActivateFn = () => {
  const authService = inject(NbAuthService);
  const router = inject(Router);
  const route = inject(ActivatedRoute);

  return authService.isAuthenticated().pipe(
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigate(['auth/login'], { relativeTo: route });
      }
    })
  )
}