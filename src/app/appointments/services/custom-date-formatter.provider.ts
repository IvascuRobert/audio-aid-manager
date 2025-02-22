import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';

@Injectable()
export class CustomDateFormatter extends CalendarDateFormatter {
  // you can override any of the methods defined in the parent class

  override monthViewColumnHeader({
    date,
    locale,
  }: DateFormatterParams): string {
    return formatDate(date, 'EEE', locale ?? '');
  }

  override monthViewTitle({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'MMM y', locale ?? '');
  }

  override weekViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'd', locale ?? '');
  }

  override dayViewHour({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'HH:mm', locale ?? '');
  }
}
