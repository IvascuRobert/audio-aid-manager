import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  EventEmitter,
  inject,
  input,
  Input,
  OnDestroy,
  output,
  Output,
  signal,
} from '@angular/core';
import {
  NbCardModule,
  NbJSThemeVariable,
  NbThemeService,
} from '@nebular/theme';
import { delay, filter, map, takeWhile } from 'rxjs/operators';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { ECElementEvent, EChartsCoreOption, EChartsType } from 'echarts/core';
import { echarts } from '../../utils/custom-echarts';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PieChart } from 'echarts/charts';
import { PieChartModel } from '../../../@core/data/pie-chart';

@Component({
  selector: 'app-pie-chart-wrapper',
  imports: [NgxEchartsDirective],
  styleUrl: './pie-chart-wrapper.component.scss',
  templateUrl: './pie-chart-wrapper.component.html',
  providers: [provideEchartsCore({ echarts })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartWrapperComponent {
  values = input.required<PieChartModel[]>();

  valuesWithOptions = effect(() => {
    this.options.set(this.getOptions(this.values()));

    if (this.values().length > 0) this.selectedSection.emit(this.values()[0]);
  });

  loading = input<boolean>(false);

  options = signal<EChartsCoreOption>({});

  echartsInstance = signal<EChartsType | null>(null);

  selectedSection = output<PieChartModel>();

  onChartInit(ec: EChartsType) {
    this.echartsInstance.set(ec);
  }

  onChartClick(event: ECElementEvent) {
    const pieData: PieChartModel = {
      value: event.value as any,
      name: event.name,
    };

    this.selectedSection.emit(pieData);
  }

  getOptions(values: PieChartModel[]): EChartsCoreOption {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '',
      },
      series: [
        {
          name: '',
          clockwise: true,
          emphasis: {
            scale: false,
          },
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['65%', '100%'],
          data: values.map((value) => this.chartValueObject(value)),
        },
      ],
    };
  }

  chartValueObject({ value, name }: PieChartModel): any {
    return {
      value: value,
      name: name,
      label: {
        normal: {
          position: 'center',
          formatter: '',
          textStyle: {
            fontSize: '22',
            fontFamily: '',
            fontWeight: '600',
            color: '',
          },
        },
      },
      tooltip: {
        show: false,
      },
    };
  }
}
