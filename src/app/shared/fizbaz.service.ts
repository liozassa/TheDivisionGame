import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizbazService {
  fizbaz_map = {};
  poss_number: number[];

  constructor() {
    this.poss_number = [];
    this.fizbaz_map = {
      'fiz': [3],
      'baz': [5],
      'fiz baz': [3,5],
      'fiz baz boom': [3,5,7],
      'not fizbaz': []
    };

    Object.values(this.fizbaz_map)
    .forEach((arr: number[]) => this.poss_number.push(...arr.filter((obj: number) => !this.poss_number.includes(obj))));
  }

  fizbaz(result: string, current_number: number) {
    const result_arr = [];
    for (let index = 0; index < this.poss_number.length; index++) {
      if (current_number % this.poss_number[index] === 0) {
        if (!this.fizbaz_map[result].includes(this.poss_number[index])) {
          return false;
        } else {
          result_arr.push(this.poss_number[index]);
        }
      }
    }
    const equals = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
    return equals(result_arr, this.fizbaz_map[result]);
  }
}
