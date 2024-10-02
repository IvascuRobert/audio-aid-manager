import { FormControl } from '@angular/forms';
import { StoreEntity } from './lite-store.model';

export interface Room {
  id: number;
  name: string;
  shopId: number | null;
}

export type RoomForm = {
  [field in keyof Room]: FormControl<Room[field]>;
};

export interface RoomState extends StoreEntity<Room> {
  loading: boolean;
}
