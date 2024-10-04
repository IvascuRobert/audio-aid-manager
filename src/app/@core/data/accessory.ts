import { FormControl } from '@angular/forms';
import { Brand } from './brand';
import { StoreEntity } from './lite-store.model';

export enum AccessoryType {
  remote = 'Remote',
  tvAdapter = 'TVAdapter',
  roger = 'Roger',
  charger = 'Charger',
}
export enum AccessoryStatus {
  Free = 'Free',
  Sending = 'Sending',
  Reserved = 'Reserved',
  Trial = 'Trial',
  Sold = 'Sold',
}
export interface Accessory {
  brand: Brand;
  groupId: number;
  id: number;
  name: string;
  price: number;
  serialNumber: string;
  shopId: number | null;
  status: AccessoryStatus;
  type: AccessoryType;
}

export type AccessoryForm = {
  [field in keyof Omit<Accessory, 'status'>]: FormControl<Accessory[field]>;
};

export interface AccessoryState extends StoreEntity<Accessory> {
  loading: boolean;
}
