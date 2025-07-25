import { FormControl } from '@angular/forms';
import { ProcessStatusType } from './customer';
import { StoreEntity } from './lite-store.model';

export enum Duration {
  none = 'None',
  lessThanThreeYears = 'LessThanThreeYears',
  moreThanThreeYears = 'MoreThanThreeYears',
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
  [field in keyof Process]: FormControl<Process[field]>;
};

export type EndProcessApi = {
  [field in keyof Omit<
    Process,
    | 'id'
    | 'leftEarValue'
    | 'currentLeftEarDeviceName'
    | 'leftEarDeviceDuration'
    | 'rightEarValue'
    | 'rightEarDeviceDuration'
    | 'currentRightEarDeviceName'
    | 'questionnaire'
    | 'comment'
    | 'customerId'
  >]: Process[field];
};

export type EndProcessForm = {
  [field in keyof Omit<
    Process,
    | 'id'
    | 'leftEarValue'
    | 'currentLeftEarDeviceName'
    | 'leftEarDeviceDuration'
    | 'rightEarValue'
    | 'rightEarDeviceDuration'
    | 'currentRightEarDeviceName'
    | 'questionnaire'
    | 'comment'
    | 'customerId'
  >]: FormControl<Process[field]>;
};
