import { Directive } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { isNull, remove } from "lodash";
import { LocalDataSource } from "ng2-smart-table";
import {
  mapHideOrShowColumns,
  mapShowColumns,
} from "../../../@core/utils/map-hide-or-show-columns";
import {
  LOCAL_STORAGE_KEYS_FOR_TABLE,
  getItem,
  setItem,
} from "../../../@core/utils/save-local-storage";
import { SettingsDialogComponent } from "../components/settings-dialog/settings-dialog.component";

@Directive()
export abstract class BaseTable<T extends { id: number }> {
  settings: Record<string, any> = {};

  selectedRows: T[] = [];

  isAllSelected: boolean = false;

  source: LocalDataSource = new LocalDataSource();

  localStorageSettingsKey: LOCAL_STORAGE_KEYS_FOR_TABLE;

  hiddenColumns: string[];

  constructor(protected readonly dialogService: NbDialogService) {
    this.loadTableSettingsFromLocalStorage();
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
      remove(this.selectedRows, ["id", row.data.id]);
    }
  }

  removeItem() {
    if (this.selectedRows.length > 0) {
      this.source.remove(this.selectedRows[0]);
    }
  }

  reload() {
    this.source.refresh();
  }

  settingsDialog() {
    this.dialogService
      .open(SettingsDialogComponent, {
        context: {
          hiddenColumns: this.hiddenColumns,
          localStorageSettingsKey: this.localStorageSettingsKey,
        },
      })
      .onClose.subscribe((settings) => {
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

  private loadTableSettingsFromLocalStorage() {
    const columns = getItem(this.localStorageSettingsKey);

    if (columns) {
      this.settings = mapShowColumns(columns, this.settings);
    }
  }
}
