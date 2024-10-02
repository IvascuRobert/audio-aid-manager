import { FormControl } from '@angular/forms';
import { StoreEntity } from './lite-store.model';

export interface Clinic {
  id: number;
  name: string;
  address: string;
}

export type ClinicForm = {
  [field in keyof Clinic]: FormControl<Clinic[field]>;
};

export interface ClinicState extends StoreEntity<Clinic> {
  loading: boolean;
}
