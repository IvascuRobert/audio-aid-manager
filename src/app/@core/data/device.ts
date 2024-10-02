import { FormControl } from '@angular/forms';
import { Battery } from './battery';
import { StoreEntity } from './lite-store.model';

export enum DeviceStatus {
  free = 'free',
  sending = 'sending',
  reserved = 'reserved',
  trial = 'trial',
  sold = 'sold',
}

export enum DeviceAslGroup {
  'type1',
  'type2',
}

export enum DeviceType {
  ITE,
  RITE,
  BTE,
}

export enum DeviceQualityLevel {
  'q1',
  'q2',
  'q3',
  'q4',
  'q5',
  'q6',
  'q7',
}

export interface Device {
  id: number;
  groupId: number;
  brand: string;
  name: string;
  serialNumber: string;
  type: DeviceType;
  battery: Battery;
  qualityLevel: DeviceQualityLevel;
  color: string;
  aslGroup: DeviceAslGroup;
  status: DeviceStatus;
  price: number;
  shopId: number;
}

export type DeviceForm = {
  [field in keyof Omit<Device, 'status'>]: FormControl<Device[field]>;
};

export interface DeviceState extends StoreEntity<Device> {
  loading: boolean;
}
