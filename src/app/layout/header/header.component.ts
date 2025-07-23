import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import {
  NbActionsModule,
  NbContextMenuModule,
  NbIconModule,
  NbMenuService,
  NbSearchModule,
  NbSelectModule,
  NbSidebarService,
  NbThemeService,
  NbUserModule,
} from '@nebular/theme';
import { filter, map } from 'rxjs';
import { CoreService } from '../../@core/services/core.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NbIconModule,
    NbSelectModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule,
    NbContextMenuModule,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  themeService = inject(NbThemeService);
  sidebarService = inject(NbSidebarService);
  menuService = inject(NbMenuService);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  coreService = inject(CoreService);

  currentTheme = 'default';
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  contextTag = 'user-context-menu-';

  user$ = this.coreService.user$;

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((themeName) => (this.currentTheme = themeName));

    this.menuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === this.contextTag),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((res) => {
        if (res.item.title === 'Log out') {
          this.router.navigateByUrl('/auth/logout');
        }
      });
  }

  changeTheme(themeName: string): void {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
