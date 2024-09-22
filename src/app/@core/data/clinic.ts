import { StoreEntity } from './lite-store.model';

export interface Clinic {
  id: number;
  name: string;
}

export interface ClinicState extends StoreEntity<Clinic> {
  loading: boolean;
}
