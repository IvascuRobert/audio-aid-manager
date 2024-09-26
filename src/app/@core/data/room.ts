import { StoreEntity } from './lite-store.model';

export interface Room {
  id: number;
  name: string;
}

export interface RoomState extends StoreEntity<Room> {
  loading: boolean;
}
