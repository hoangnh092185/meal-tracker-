import { Pipe, PipeTransform } from '@angular.core';
import { Meal } from './meal.model';

@ Pipe({
  name: 'sort',
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(input: Meal[], desiredSort){
    var output: Meal[] = [];
    if( desiredSort = )
  }

}
