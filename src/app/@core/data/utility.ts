import { StoreEntity } from './lite-store.model';

export enum UtilityType {
  battery = 'battery',
  filter = 'filter',
  domes = 'domes',
}

export interface Utility {
  id: number;
  name: string;
  brand: string;
  quantity: number;
  type: UtilityType | null;
  price: number;
  location: string;
}

export interface UtilityState extends StoreEntity<Utility> {
  loading: boolean;
}
