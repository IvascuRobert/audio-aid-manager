import { StoreEntity } from './lite-store.model';

export interface Room {
  id: number;
  name: string;
  shopId: number | null;
}

export interface RoomState extends StoreEntity<Room> {
  loading: boolean;
}
