import { FormControl } from '@angular/forms';
import { ProcessStatusType } from './customer';
import { StoreEntity } from './lite-store.model';

export enum Duration {
  none = 'none',
  lessThanThreeYears = 'lessThanThreeYears',
  moreThanThreeYears = 'moreThanThreeYears',
}

export enum ProcessEndReason {
  money = 'money',
  style = 'style',
}

export interface Process {
  id: number;
  status: ProcessStatusType;
  leftEarValue: number;
  currentLeftEarDeviceName: string;
  leftEarDeviceDuration: Duration;
  rightEarValue: number;
  currentRightEarDeviceName: string;
  rightEarDeviceDuration: Duration;
  questionnaire: number;
  reason: string;
  comment: string;
  customerId: number | null;
}

export interface ProcessState extends StoreEntity<Process> {
  loading: boolean;
}

export type ProcessForm = {
  [field in keyof Omit<Process, 'status'>]: FormControl<Process[field]>;
};
