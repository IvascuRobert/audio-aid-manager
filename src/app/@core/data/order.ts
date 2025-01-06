import { AccessoryStatus } from './accessory';
import { DeviceStatus } from './device';
import { StoreEntity } from './lite-store.model';

export interface Order {
  id: number;
  processId: number;
  deviceList: { id: number; status: DeviceStatus }[];
  accessoryList: { id: number; status: AccessoryStatus }[];
  utilitiesList: { id: number; quantity: number }[];
  serviceList: { id: number; price: number }[];
  total: number;
}

export interface OrderState extends StoreEntity<Order> {
  loading: boolean;
}
