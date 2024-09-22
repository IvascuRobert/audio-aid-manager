import { StoreEntity } from './lite-store.model';

export interface Doctor {
  id: number;
  name: string;
}

export interface DoctorState extends StoreEntity<Doctor> {
  loading: boolean;
}
