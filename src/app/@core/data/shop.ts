import { StoreEntity } from './lite-store.model';

export interface Shop {
  id: number;
  name: string;
  address: string;
}

export interface ShopState extends StoreEntity<Shop> {
  loading: boolean;
}
