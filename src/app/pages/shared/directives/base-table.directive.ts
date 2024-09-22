import { Directive, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isNull, remove } from 'lodash';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
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
import { SettingsDialogComponent } from '../components/settings-dialog/settings-dialog.component';

@UntilDestroy()
@Directive()
export abstract class BaseTable<T extends { id: number }> implements OnInit {
  settings: Record<string, any> = {};

  selectedRows: T[] = [];

  isAllSelected: boolean = false;

  source: LocalDataSource = new LocalDataSource();

  localStorageSettingsKey: LOCAL_STORAGE_KEYS_FOR_TABLE;

  hiddenColumns: string[];

  entity: Entity | null = null;

  entities$ = new Observable();

  constructor(
    private coreService: CoreService,
    readonly dialogService: NbDialogService
  ) {
    this.loadTableSettingsFromLocalStorage();
  }

  ngOnInit(): void {
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

  removeItem(row: T) {
    this.source.remove(row);
    this.selectedRows = [];
    this.isAllSelected = false;
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
      })
      .onClose.pipe(untilDestroyed(this))
      .subscribe((settings) => {
        if (settings) {
          const { columns, hiddenColumns } = settings;
          this.settings = mapHideOrShowColumns(
            columns,
            this.settings,
            hiddenColumns
          );
          setItem(this.localStorageSettingsKey, columns);
        }
      });
  }

  openRemoveDialog() {
    if (this.selectedRows.length > 0) {
      // this.dialogService
      //   .open(RemoveDialogComponent, {
      //     context: {
      //       entity: this.entity,
      //       id: this.selectedRows[0].id,
      //     },
      //   })
      //   .onClose.pipe(untilDestroyed(this))
      //   .subscribe();
    }
  }

  reloadDoctors(): void {
    this.resetSelectedRows();
    this.getServerData();
  }

  private loadTableSettingsFromLocalStorage() {
    const columns = getItem(this.localStorageSettingsKey);

    if (columns) {
      this.settings = mapShowColumns(columns, this.settings);
    }
  }

  private getServerData(): void {
    this.coreService
      .get<T[]>(this.entity)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
