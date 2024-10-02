import { FormControl } from '@angular/forms';
import { StoreEntity } from './lite-store.model';

export interface Doctor {
  id: number;
  name: string;
}

export type DoctorForm = {
  [field in keyof Doctor]: FormControl<Doctor[field]>;
};

export interface DoctorState extends StoreEntity<Doctor> {
  loading: boolean;
}
