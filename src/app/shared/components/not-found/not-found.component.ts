import { Component } from '@angular/core';
import { NbButtonModule, NbCardModule, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NbCardModule, NbButtonModule],
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  constructor(private menuService: NbMenuService) {}

  goToHome() {
    this.menuService.navigateHome();
  }
}
