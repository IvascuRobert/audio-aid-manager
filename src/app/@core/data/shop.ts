import { FormControl } from '@angular/forms';
import { StoreEntity } from './lite-store.model';

export interface Shop {
  id: number;
  name: string;
  address: string;
}

export type ShopForm = {
  [field in keyof Shop]: FormControl<Shop[field]>;
};

export interface ShopState extends StoreEntity<Shop> {
  loading: boolean;
}
