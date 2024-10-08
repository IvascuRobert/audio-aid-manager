import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import {
  ProgressInfo,
  StatsProgressBarData,
} from '../../../@core/data/stats-progress-bar';

@Component({
  selector: 'ngx-progress-section',
  styleUrls: ['./progress-section.component.scss'],
  templateUrl: './progress-section.component.html',
})
export class ECommerceProgressSectionComponent implements OnDestroy {
  private alive = true;

  progressInfoData!: ProgressInfo[];

  constructor(private statsProgressBarService: StatsProgressBarData) {
    this.statsProgressBarService
      .getProgressInfoData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.progressInfoData = data;
      });
  }

  ngOnDestroy() {
    this.alive = true;
  }
}
