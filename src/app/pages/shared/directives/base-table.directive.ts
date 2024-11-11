import { Directive, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isNull, remove } from 'lodash';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { Entity } from '../../../@core/data/entity';
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
import { RemoveDialogComponent } from '../components/remove-dialog/remove-dialog.component';
import { SettingsDialogComponent } from '../components/settings-dialog/settings-dialog.component';

@UntilDestroy()
@Directive()
export abstract class BaseTable<T extends { id: number }> implements OnInit {
  settings: Record<string, any> = {};

  selectedRows: T[] = [];

  isAllSelected: boolean = false;

  source: LocalDataSource = new LocalDataSource();

  localStorageSettingsKey!: LOCAL_STORAGE_KEYS_FOR_TABLE;

  hiddenColumns: string[] = [];

  entity!: Entity;

  params: Record<string, string> = {};

  entities$ = new Observable();

  dialogTemplateRef: any;

  constructor(
    private coreService: CoreService,
    readonly dialogService: NbDialogService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadTableSettingsFromLocalStorage();
    this.getServerData();
    this.entities$ = this.coreService.getEntities$<any>(this.entity).pipe(
      filter((res) => !!this.entity && !!res?.entities),
      tap(({ entities }) => this.source.load(Object.values(entities)))
    );
  }

  handleSelectedRow(row: {
    data: T | null;
    isSelected: boolean | null;
    source: LocalDataSource;
  }): void {
    if (isNull(row.data)) {
      this.isAllSelected = !this.isAllSelected;
      if (this.isAllSelected) {
        row.source.getAll().then((value) => (this.selectedRows = value));
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

  openSettingsDialog() {
    this.dialogService
      .open(SettingsDialogComponent, {
        context: {
          hiddenColumns: this.hiddenColumns,
          localStorageSettingsKey: this.localStorageSettingsKey,
        },
        closeOnBackdropClick: false,
      })
      .onClose.pipe(
        untilDestroyed(this),
        tap((settings) => {
          if (settings) {
            const { columns, hiddenColumns } = settings;

            this.settings = mapHideOrShowColumns(
              columns,
              this.settings,
              hiddenColumns
            );
            setItem(this.localStorageSettingsKey, columns);
          }
        })
      )
      .subscribe();
  }

  openRemoveDialog(id?: number) {
    if (id) {
      this.dialogService
        .open(RemoveDialogComponent, {
          context: {
            entity: this.entity,
            id,
          },
          closeOnBackdropClick: false,
        })
        .onClose.pipe(
          untilDestroyed(this),
          tap((fetchData: boolean) => {
            if (fetchData) this.refresh();
          })
        )
        .subscribe();
    }
  }

  addDialog() {
    this.dialogRef()
      .onClose.pipe(
        untilDestroyed(this),
        tap((fetchData: boolean) => {
          if (fetchData) this.refresh();
        })
      )
      .subscribe();
  }

  editDialog(row?: T) {
    const selected = row ? row : this.selectedRows[0];
    if (selected)
      this.dialogRef<T>(selected)
        .onClose.pipe(
          untilDestroyed(this),
          tap((fetchData: boolean) => {
            if (fetchData) this.refresh();
          })
        )
        .subscribe();
  }

  openCustomDialog<T>(template: any, row: T) {
    const selected = row ? row : this.selectedRows[0];
    if (selected)
      this.dialogService
        .open(template, {
          context: {
            selected,
            entity: this.entity,
            params: this.params,
          },
          closeOnBackdropClick: false,
        })
        .onClose.pipe(
          untilDestroyed(this),
          tap((fetchData: boolean) => {
            if (fetchData) this.refresh();
          })
        )
        .subscribe();
  }

  refresh(): void {
    this.resetSelectedRows();
    this.getServerData();
  }

  dialogRef<T>(value?: T) {
    return this.dialogService.open(this.dialogTemplateRef, {
      context: {
        selected: value,
        entity: this.entity,
        params: this.params,
      },
      closeOnBackdropClick: false,
    });
  }

  private loadTableSettingsFromLocalStorage() {
    const columns = getItem(this.localStorageSettingsKey);

    this.settings = mapShowColumns(columns, this.settings);
  }

  private getServerData(): void {
    this.activatedRoute.params
      .pipe(
        tap((params) => {
          this.params = params;
        }),
        switchMap((params) => this.coreService.get<T[]>(this.entity, params)),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
