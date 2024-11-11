import { FormControl } from '@angular/forms';

export enum CustomerStatus {
  new = 'new',
  no = 'no', // normal
  pc = 'pc', // potential client
  cc = 'cc', // concurent client
  cl = 'cl', //
}
export enum CustomerContactNoteType {
  MemberGetMember = 'MemberGetMember',
  Social = 'Social',
  Doctor = 'Doctor',
  Commercial = 'Commercial',
  Other = 'Other',
}
export enum ProcessStatusType {
  open = 'Open',

  trial = 'Trial',
  win = 'Win',
  lost = 'Lost',
  end = 'End',
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
