import { Pipe, type PipeTransform } from '@angular/core';
import { isToday } from 'date-fns';

@Pipe({
  name: 'isToday',
  standalone: true,
})
export class IsTodayPipe implements PipeTransform {
  transform(value: Date): boolean {
    return isToday(value);
  }
}
