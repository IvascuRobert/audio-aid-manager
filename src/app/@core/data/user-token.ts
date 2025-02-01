import { Role } from './role';

export interface UserToken {
  Role: Role;
  UserId: string;
  UserName: string; // here is email
  aud: 'auditive-api-client';
  exp: number;
  iss: 'auditive-api';
}
