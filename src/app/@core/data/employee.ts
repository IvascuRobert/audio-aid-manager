import { FormControl } from '@angular/forms';
import { Gender } from './customer';
import { StoreEntity } from './lite-store.model';
import { Role } from './role';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  gender: Gender;
}

export type EmployeeForm = {
  [field in keyof Omit<Employee, 'password'>]: FormControl<Employee[field]>;
};

export interface EmployeeState extends StoreEntity<Employee> {
  loading: boolean;
}
