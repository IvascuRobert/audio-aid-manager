import { cloneDeep } from 'lodash';

export function mapHideOrShowColumns(
  columns: string[],
  settings: any,
  hiddenColumns: string[],
): any {
  const cloneSettings = cloneDeep(settings);

  for (const hiddenColumn of hiddenColumns) {
    if (columns.includes(hiddenColumn)) {
      cloneSettings.columns[hiddenColumn].hide = false;
    } else {
      cloneSettings.columns[hiddenColumn].hide = true;
    }
  }

  return cloneSettings;
}

export function mapShowColumns(columns: string[], settings: any): any {
  const cloneSettings = cloneDeep(settings);
  if (columns) {
    for (const column of columns) {
      cloneSettings.columns[column].hide = false;
    }
  }

  return cloneSettings;
}
