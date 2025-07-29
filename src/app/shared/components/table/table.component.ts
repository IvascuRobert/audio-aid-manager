import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnInit,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NbAlertModule,
  NbCardModule,
  NbDialogService,
  NbSpinnerModule,
} from '@nebular/theme';
import { isNull, remove } from 'lodash-es';
import {
  Observable,
  filter,
  finalize,
  map,
  single,
  switchMap,
  tap,
} from 'rxjs';
import { Action } from '../../../@core/data/actions';
import { Entity } from '../../../@core/data/entity';
import { Process } from '../../../@core/data/process';
import { CoreService } from '../../../@core/services/core.service';
import {
  mapHideOrShowColumns,
  mapShowColumns,
} from '../../../@core/utils/map-hide-or-show-columns';
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  getItem,
  setItem,
} from '../../../@core/utils/save-local-storage';
import { EndProcessDialogComponent } from '../../../customers/end-process-dialog/end-process-dialog.component';
import {
  CustomAction,
  CustomActionsComponent,
} from '../custom-actions/custom-actions.component';
import { ActionsCellComponent } from '../custom-table-cell-render/actions-cell.component';
import { LocalDataSource } from '../ng2-smart-table/lib/data-source/local/local.data-source';
import { Ng2SmartTableComponent } from '../ng2-smart-table/ng2-smart-table.component';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { PieChartWrapperComponent } from '../pie-chart-wrapper/pie-chart-wrapper.component';
import { PieChartModel } from '../../../@core/data/pie-chart';
import {
  Customer,
  CustomerState,
  CustomerStatus,
} from '../../../@core/data/customer';
import groupBy from 'lodash-es/groupBy';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    AsyncPipe,
    NbCardModule,
    CustomActionsComponent,
    Ng2SmartTableComponent,
    NgIf,
    JsonPipe,
    NbSpinnerModule,
    PieChartWrapperComponent,
    NbAlertModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T extends { id: number }> implements OnInit {
  destroyRef = inject(DestroyRef);

  router = inject(Router);

  coreService = inject(CoreService);
  dialogService = inject(NbDialogService);
  activatedRoute = inject(ActivatedRoute);

  @Input({ required: true }) settings: Record<string, any> = {
    columns: {},
  };

  @Input() localStorageSettingsKey!: LOCAL_STORAGE_KEYS_FOR_TABLE;

  @Input() hiddenColumns: string[] = [];

  @Input() showAction: CustomAction = {
    showProcess: false,
    showOrder: false,
    viewOrderDetails: false,
    showCustomerDetails: false,
  };

  entity = input.required<Entity>();

  title = input<string>('');

  dialogTemplateRef = input<any>();

  selectedRows: T[] = [];

  isAllSelected = false;

  source: LocalDataSource = new LocalDataSource();

  params: Record<string, string> = {};

  entities$ = new Observable();

  showActionColumn = signal(true);

  loading = signal(false);
  selectedCustomerByStatus = signal<PieChartModel>({
    value: 0,
    name: '',
    color: '',
  });

  selectedSectionByContactNote = signal<PieChartModel>({
    value: 0,
    name: '',
    color: '',
  });

  selectedSectionByGender = signal<PieChartModel>({
    value: 0,
    name: '',
    color: '',
  });

  showCharts = input(false);

  filterBy = input<string[]>([]);

  customersByStatus$: Observable<PieChartModel[]> = new Observable();

  customerByContactNote$: Observable<PieChartModel[]> = new Observable();

  customerByGender$: Observable<PieChartModel[]> = new Observable();

  ngOnInit(): void {
    this.getServerData();
    this.entities$ = this.coreService.getEntities$<any>(this.entity()).pipe(
      filter((res: any) => !!this.entity() && !!res?.entities),
      map(({ entities }) => Object.values(entities)),
      tap((entities) => {
        this.source.load(entities);
        this.coreService.subheaderInformation.set({
          value: entities.length,
          title: this.entity(),
          showHome: true,
        });
      }),
    );

    this.customersByStatus$ = this.#streamForCharts(this.filterBy()[0]);

    this.customerByContactNote$ = this.#streamForCharts(this.filterBy()[1]);

    this.customerByGender$ = this.#streamForCharts(this.filterBy()[2]);
  }

  handleSelectedSectionByStatus(event: PieChartModel): void {
    this.selectedCustomerByStatus.set(event);
  }

  handleSelectedSectionByContactNote(event: PieChartModel): void {
    this.selectedSectionByContactNote.set(event);
  }

  handleSelectedSectionByGender(event: PieChartModel): void {
    this.selectedSectionByGender.set(event);
  }

  #streamForCharts(attribute: string): Observable<PieChartModel[]> {
    return this.coreService.getEntities$<any>(this.entity()).pipe(
      filter((res: any) => !!this.entity() && !!res?.entities),
      map(({ entities }) => Object.values(entities)),
      map((res) =>
        Object.entries(groupBy(res, attribute)).map(
          (res: any) =>
            ({
              value: res[1].length,
              name: res[0],
            }) as PieChartModel,
        ),
      ),
    );
  }

  handleSelectedRow(row: any): void {
    if (isNull(row.data)) {
      this.isAllSelected = !this.isAllSelected;
      if (this.isAllSelected) {
        row.source.getAll().then((value: T[]) => (this.selectedRows = value));
      } else {
        this.selectedRows = [];
      }
    } else if (row.isSelected) {
      this.selectedRows.push(row.data);
    } else {
      remove(this.selectedRows, ['id', row.data.id]);
    }
  }

  resetSelectedRows(): void {
    this.selectedRows = [];
    this.isAllSelected = false;
  }

  openRemoveDialog(id?: number) {
    if (id) {
      this.dialogService
        .open(RemoveDialogComponent, {
          context: {
            entity: this.entity(),
            id,
          },
          closeOnBackdropClick: false,
        })
        .onClose.pipe(
          takeUntilDestroyed(this.destroyRef),
          tap((fetchData: boolean) => {
            if (fetchData) this.refresh();
          }),
        )
        .subscribe();
    }
  }

  addDialog() {
    this.dialogRef()
      ?.onClose.pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((fetchData: boolean) => {
          if (fetchData) this.refresh();
        }),
      )
      .subscribe();
  }

  editDialog(row?: T) {
    const selected = row ? row : this.selectedRows[0];
    if (selected)
      this.dialogRef<T>(selected)
        ?.onClose.pipe(
          takeUntilDestroyed(this.destroyRef),
          tap((fetchData: boolean) => {
            if (fetchData) this.refresh();
          }),
        )
        .subscribe();
  }

  onEndProcess(row?: Process) {
    const selected = row ? row : this.selectedRows[0];
    if (selected) {
      this.openCustomDialog(EndProcessDialogComponent, selected);
    }
  }

  openCustomDialog<T>(template: any, row: T) {
    const selected = row ? row : this.selectedRows[0];
    if (selected)
      this.dialogService
        .open(template, {
          context: {
            selected,
            entity: this.entity(),
            params: this.params,
          },
          closeOnBackdropClick: false,
        })
        .onClose.pipe(
          takeUntilDestroyed(this.destroyRef),
          tap((fetchData: boolean) => {
            if (fetchData) this.refresh();
          }),
        )
        .subscribe();
  }

  refresh(): void {
    this.resetSelectedRows();
    this.getServerData();
  }

  dialogRef<T>(value?: T): any {
    return this.dialogService.open(this.dialogTemplateRef(), {
      context: {
        selected: value,
        entity: this.entity(),
        params: this.params,
      },
      closeOnBackdropClick: false,
    });
  }

  goTorProces() {
    if (this.selectedRows.length > 0) {
      this.router.navigate([
        `/pages/customers/${this.selectedRows[0].id}/process`,
      ]);
      this.coreService.selectedCustomer.set(this.selectedRows[0] as any);
    }
  }

  goToPlaceAnOrder(): void {
    if (this.selectedRows.length > 0) {
      this.router.navigate([this.selectedRows[0].id, 'order'], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  goToViewOrder(): void {
    if (this.selectedRows.length > 0) {
      this.router.navigate([this.selectedRows[0].id, 'detail'], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  showCustomerDetails(): void {
    this.coreService.showCustomerDetails.set(true);
  }

  private getServerData(): void {
    this.loading.set(true);
    this.activatedRoute.params
      .pipe(
        tap((params) => {
          this.params = params;
        }),
        switchMap((params) =>
          this.coreService
            .get<T[]>(this.entity(), params)
            .pipe(finalize(() => this.loading.set(false))),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
