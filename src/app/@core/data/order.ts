import { Accessory, AccessoryStatus } from './accessory';
import { Device, DeviceStatus } from './device';
import { StoreEntity } from './lite-store.model';
import { Service } from './service';
import { Utility } from './utility';

export interface Order {
  id?: number;
  processId: number;
  customerId: number;
  userId: number;
  deviceList: Device[];
  accessoryList: Accessory[];
  utilitiesList: Utility[];
  serviceList: Service[];
  total: number;
}

export interface OrderState extends StoreEntity<Order> {
  loading: boolean;
}
