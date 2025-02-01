import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { NbIconLibraries } from '@nebular/theme';
import { UserToken } from './@core/data/user-token';
import { CoreService } from './@core/services/core.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  standalone: true,
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  nbAuthService = inject(NbAuthService);

  coreService = inject(CoreService);

  destroyRef = inject(DestroyRef);

  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('font-awesome', {
      packClass: 'fab',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerFontPack('fa', {
      packClass: 'fa',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerFontPack('far', {
      packClass: 'far',
      iconClassPrefix: 'fa',
    });
  }

  ngOnInit(): void {
    this.nbAuthService
      .onTokenChange()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((token: NbAuthToken) => {
        const user = token.isValid() ? (token.getPayload() as UserToken) : null;
        this.coreService.user$.next(user);
      });
  }
}
