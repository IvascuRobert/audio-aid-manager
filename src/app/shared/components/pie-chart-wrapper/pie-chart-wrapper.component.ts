import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  input,
  Input,
  OnDestroy,
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
  imports: [NbCardModule, NgxEchartsDirective],
  styleUrl: './pie-chart-wrapper.component.scss',
  templateUrl: './pie-chart-wrapper.component.html',
  providers: [provideEchartsCore({ echarts })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartWrapperComponent implements AfterViewInit {
  #theme = inject(NbThemeService);

  #destroyRef = inject(DestroyRef);

  values = input.required<PieChartModel[]>();

  loading = input<boolean>(false);

  options = signal<EChartsCoreOption>({});

  echartsInstance = signal<EChartsType | null>(null);

  selectedSection = signal<{ value: any; name: string; color: string }>({
    value: 0,
    name: '',
    color: '',
  });

  ngAfterViewInit() {
    this.#theme
      .getJsTheme()
      .pipe(
        map(({ variables }) => variables),
        filter(Boolean),
        takeUntilDestroyed(this.#destroyRef),
      )
      .subscribe((variables) => {
        this.options.set(this.getOptions(variables));
      });
  }

  onChartInit(ec: EChartsType) {
    this.echartsInstance.set(ec);
  }

  onChartClick(event: ECElementEvent) {
    const pieData = {
      value: event.value,
      name: event.name,
      color: (event as any).color.colorStops[0].color,
    };

    this.selectedSection.set(pieData);
  }

  getOptions(variables: NbJSThemeVariable): EChartsCoreOption {
    const earningPie: any = variables['earningPie'];

    return {
      tooltip: {
        trigger: 'item',
        formatter: '',
      },
      series: [
        {
          name: '',
          clockWise: true,
          hoverAnimation: false,
          type: 'pie',
          center: earningPie.center,
          radius: earningPie.radius,
          data: [
            {
              value: this.values()[0].value,
              name: this.values()[0].name,
              label: {
                normal: {
                  position: 'center',
                  formatter: '',
                  textStyle: {
                    fontSize: '22',
                    fontFamily: variables['fontSecondary'],
                    fontWeight: '600',
                    color: variables['fgHeading'],
                  },
                },
              },
              tooltip: {
                show: false,
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: earningPie.firstPieGradientLeft,
                    },
                    {
                      offset: 1,
                      color: earningPie.firstPieGradientRight,
                    },
                  ]),
                  shadowColor: earningPie.firstPieShadowColor,
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowOffsetY: 3,
                },
              },
            },
            {
              value: this.values()[1].value,
              name: this.values()[1].name,
              label: {
                normal: {
                  position: 'center',
                  formatter: '',
                  textStyle: {
                    fontSize: '22',
                    fontFamily: variables['fontSecondary'],
                    fontWeight: '600',
                    color: variables['fgHeading'],
                  },
                },
              },
              tooltip: {
                show: false,
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: earningPie.secondPieGradientLeft,
                    },
                    {
                      offset: 1,
                      color: earningPie.secondPieGradientRight,
                    },
                  ]),
                  shadowColor: earningPie.secondPieShadowColor,
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowOffsetY: 3,
                },
              },
            },
            {
              value: this.values()[2].value,
              name: this.values()[2].name,
              label: {
                normal: {
                  position: 'center',
                  formatter: '',
                  textStyle: {
                    fontSize: '22',
                    fontFamily: variables['fontSecondary'],
                    fontWeight: '600',
                    color: variables['fgHeading'],
                  },
                },
              },
              tooltip: {
                show: false,
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: earningPie.thirdPieGradientLeft,
                    },
                    {
                      offset: 1,
                      color: earningPie.thirdPieGradientRight,
                    },
                  ]),
                  shadowColor: earningPie.thirdPieShadowColor,
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowOffsetY: 3,
                },
              },
            },
          ],
        },
      ],
    };
  }
}
