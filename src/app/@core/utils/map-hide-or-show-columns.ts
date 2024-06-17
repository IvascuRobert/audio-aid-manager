
import { cloneDeep } from "lodash";

export function mapHideOrShowColumns(columns: string[], settings: any,hiddenColumns:string[] ): Record<string, any> {
    const cloneSettings = cloneDeep(settings);

    for (let hiddenColumn of hiddenColumns) {
      if (columns.includes(hiddenColumn)) {
        cloneSettings.columns[hiddenColumn].hide = false;
      } else {
        cloneSettings.columns[hiddenColumn].hide = true;
      }
    }

    return cloneSettings;
  }