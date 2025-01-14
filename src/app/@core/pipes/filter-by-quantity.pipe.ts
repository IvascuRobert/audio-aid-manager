import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from 'lodash';
import { Utility } from '../../@core/data/utility';

@Pipe({ name: 'filterByQuantity' })
export class FilterByQuantityPipe implements PipeTransform {
  transform(items1: Utility[] | null, items2: Utility[] | null): any {
    if (!items1 || !items2) {
      return [];
    }

    return items1
      .map((item1) => {
        const findItem2 = items2.find((item2) => item2.id === item1.id);
        if (findItem2) {
          const quantity = item1.quantity - findItem2.quantity;

          if (quantity === 0) {
            return {};
          }
          return { ...item1, quantity };
        }
        return item1;
      })
      .filter((item) => !isEmpty(item));
  }
}
