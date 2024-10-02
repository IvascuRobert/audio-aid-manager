import { FormControl } from '@angular/forms';
import { ProcessStatusType } from './customer';

export enum UserHasDeviceType {
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
  leftEarDevice: UserHasDeviceType;
  rightEarValue: number;
  rightEarDevice: UserHasDeviceType;
  questionnaire: number;
  reason: ProcessEndReason;
  comment: string;
}

export type ProcessForm = {
  [field in keyof Omit<Process, 'status'>]: FormControl<Process[field]>;
};
