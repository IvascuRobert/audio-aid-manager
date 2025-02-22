import { FormControl } from '@angular/forms';
import { StoreEntity } from './lite-store.model';

export interface Appointment {
  id: number | null;
  startDate: Date | null;
  endDate: Date | null;
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

export type AppointmentForm = {
  [field in keyof Omit<
    Appointment,
    'status' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'
  >]: FormControl<Appointment[field]>;
};

export interface AppointmentState extends StoreEntity<Appointment> {
  loading: boolean;
}
