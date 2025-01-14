import { Pipe, PipeTransform } from '@angular/core';
import { xor } from 'lodash';

@Pipe({ name: 'xor' })
export class XorPipe implements PipeTransform {
  transform(items1: any, items2: any): any {
    return xor(items1, items2);
  }
}
