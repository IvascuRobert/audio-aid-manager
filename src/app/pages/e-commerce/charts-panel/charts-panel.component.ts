import { Component, OnDestroy, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { OrdersChart } from '../../../@core/data/orders-chart';
import {
  OrderProfitChartSummary,
  OrdersProfitChartData,
} from '../../../@core/data/orders-profit-chart';
import { ProfitChart } from '../../../@core/data/profit-chart';
import { OrdersChartComponent } from './charts/orders-chart.component';
import { ProfitChartComponent } from './charts/profit-chart.component';

@Component({
  selector: 'ngx-ecommerce-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent implements OnDestroy {
  private alive = true;

  chartPanelSummary!: OrderProfitChartSummary[];
  period: string = 'week';
  ordersChartData!: OrdersChart;
  profitChartData!: ProfitChart;

  @ViewChild('ordersChart', { static: true })
  ordersChart!: OrdersChartComponent;
  @ViewChild('profitChart', { static: true })
  profitChart!: ProfitChartComponent;

  constructor(private ordersProfitChartService: OrdersProfitChartData) {
    this.ordersProfitChartService
      .getOrderProfitChartSummary()
      .pipe(takeWhile(() => this.alive))
      .subscribe((summary) => {
        this.chartPanelSummary = summary;
      });

    this.getOrdersChartData(this.period);
    this.getProfitChartData(this.period);
  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.getOrdersChartData(value);
    this.getProfitChartData(value);
  }

  changeTab(selectedTab: any) {
    if (selectedTab.tabTitle === 'Profit') {
      this.profitChart.resizeChart();
    } else {
      this.ordersChart.resizeChart();
    }
  }

  getOrdersChartData(period: string) {
    this.ordersProfitChartService
      .getOrdersChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe((ordersChartData) => {
        this.ordersChartData = ordersChartData;
      });
  }

  getProfitChartData(period: string) {
    this.ordersProfitChartService
      .getProfitChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe((profitChartData) => {
        this.profitChartData = profitChartData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
