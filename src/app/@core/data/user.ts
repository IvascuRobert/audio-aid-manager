import { Gender } from './customer';
import { StoreEntity } from './lite-store.model';
import { Role } from './role';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  gender: Gender;
}

export interface UserState extends StoreEntity<User> {
  loading: boolean;
}
