import { FormControl } from '@angular/forms';
import { StoreEntity } from './lite-store.model';

export interface AppointmentBase {
  id: number | null;
  roomId: number | null;
  customerId: number | null;
  title: string;
  description: string;
  doctorId: number | null;
  color: string;
  endReason: string;
  status: string;
  createdBy: number | null;
  updatedBy: number | null;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export interface Appointment extends AppointmentBase {
  startDate: Date | null;
  endDate: Date | null;
}

export interface AppointmentApiResponse extends AppointmentBase {
  startDate: string;
  endDate: string;
}

export type AppointmentForm = {
  [field in keyof Omit<
    Appointment,
    | 'status'
    | 'createdAt'
    | 'updatedAt'
    | 'createdBy'
    | 'updatedBy'
    | 'endReason'
  >]: FormControl<Appointment[field]>;
};

export interface AppointmentState extends StoreEntity<AppointmentApiResponse> {
  loading: boolean;
}
