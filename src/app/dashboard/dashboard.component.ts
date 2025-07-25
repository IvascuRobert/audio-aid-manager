import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CoreService } from '../@core/services/core.service';
import { Entity } from '../@core/data/entity';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  #coreService = inject(CoreService);

  ngOnInit(): void {
    this.#coreService.subheaderInformation.set({
      value: 0,
      title: 'Dashboard',
    });
  }
}
