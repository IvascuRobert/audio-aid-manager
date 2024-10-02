import { FormControl } from '@angular/forms';
import { StoreEntity } from './lite-store.model';

export interface Service {
  id: number;
  name: string;
  price: number;
}

export type ServiceForm = {
  [field in keyof Service]: FormControl<Service[field]>;
};

export interface ServiceState extends StoreEntity<Service> {
  loading: boolean;
}
