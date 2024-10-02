import { FormControl } from '@angular/forms';
import { Brand } from './brand';
import { StoreEntity } from './lite-store.model';

export enum UtilityType {
  Eargo = 'Eargo',
  Domes = 'Domes',
  Filter = 'Filter',
  Gel = 'Gel',
  Wipes = 'Wipes',
}

export interface Utility {
  id: number;
  name: string;
  brand: Brand | null;
  quantity: number;
  type: UtilityType | null;
  price: number;
  shopId: number;
}

export type UtilityForm = {
  [field in keyof Omit<Utility, 'status'>]: FormControl<Utility[field]>;
};

export interface UtilityState extends StoreEntity<Utility> {
  loading: boolean;
}
