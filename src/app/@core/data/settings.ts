import { FormControl } from '@angular/forms';

export interface Settings {
  columns: string[];
}

export type SettingsForm = {
  [field in keyof Settings]: FormControl<Settings[field]>;
};
