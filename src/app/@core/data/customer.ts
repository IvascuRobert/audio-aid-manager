import { FormControl } from '@angular/forms';

export enum CustomerStatus {
  no = 'no',
  pc = 'pc',
  cc = 'cc',
  cl = 'cl',
}
export enum CustomerContactNoteType {
  member_get_member = 'member_get_member',
  social = 'social',
  doctor = 'doctor',
  commercial = 'commercial',
}
export enum ProcessStatusType {
  open = 'open',
  trial = 'trial',
  win = 'win',
  lost = 'lost',
  end = 'end',
}
export enum Gender {
  male = 'Male',
  female = 'Female',
  unknown = 'Unknown',
}
export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: Date | null;
  telephone: string;
  status: CustomerStatus;
  address: string;
  doctor: string;
  clinic: string;
  contactNote: CustomerContactNoteType;
  processStatus: ProcessStatusType;
  location: string;
  appointment: Date | null;
  gender: Gender;
}

export type CustomerForm = {
  [field in keyof Omit<Customer, 'status' | 'processStatus'>]: FormControl<
    Customer[field]
  >;
};
