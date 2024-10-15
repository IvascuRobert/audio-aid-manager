import { FormControl } from '@angular/forms';

export enum CustomerStatus {
  no = 'no',
  pc = 'pc',
  cc = 'cc',
  cl = 'cl',
}
export enum CustomerContactNoteType {
  MemberGetMember = 'MemberGetMember',
  Social = 'Social',
  Doctor = 'Doctor',
  Commercial = 'Commercial',
  Other = 'Other',
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
  dateOfBirth: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  phoneNumber: string;
  taxCode: string;
  status: CustomerStatus;
  address: string;
  doctorId: string;
  clinicId: string;
  contactNote: CustomerContactNoteType;
  gender: Gender;
  comment: string;
}

export type CustomerForm = {
  [field in keyof CustomerApi]: FormControl<Customer[field]>;
};

export type CustomerApi = {
  [field in keyof Omit<
    Customer,
    'status' | 'processStatus' | 'createdAt' | 'updatedAt'
  >]: Customer[field];
};
