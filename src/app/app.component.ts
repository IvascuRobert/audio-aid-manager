import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  standalone: true,
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
}
