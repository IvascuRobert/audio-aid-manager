import { StoreEntity } from './lite-store.model';

export interface Service {
  id: number;
  name: string;
  price: number;
}

export interface ServiceState extends StoreEntity<Service> {
  loading: boolean;
}
