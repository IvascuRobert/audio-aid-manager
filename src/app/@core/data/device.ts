import { FormControl } from '@angular/forms';
import { Battery } from './battery';
import { StoreEntity } from './lite-store.model';

export enum DeviceStatus {
  Free = 'Free',
  Sending = 'Sending',
  Reserved = 'Reserved',
  Trial = 'Trial',
  Sold = 'Sold',
}

export enum DeviceAslGroup {
  AslGroup0 = '0',
  AslGroup1 = '1',
}

export enum DeviceType {
  ITE = 'ITE',
  RITE = 'RITE',
  BTE = 'BTE',
}

export enum DeviceQualityLevel {
  Level1 = '1',
  Level2 = '2',
  Level3 = '3',
  Level4 = '4',
  Level5 = '5',
  Level6 = '6',
  Level7 = '7',
}

export enum DevicePosition {
  Neutral = 'Neutral',
  Left = 'Left',
  Right = 'Right',
}

export interface Device {
  id: number;
  group: number;
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
  position: DevicePosition;
  shopId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type DeviceForm = {
  [field in keyof Omit<
    Device,
    'status' | 'createdAt' | 'updatedAt'
  >]: FormControl<Device[field]>;
};

export interface DeviceState extends StoreEntity<Device> {
  loading: boolean;
}
