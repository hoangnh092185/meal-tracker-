import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@ Pipe({
  name: 'sort',
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(input: Meal[], desiredSort){
    var output: Meal[] = [];
    if( desiredSort === "highCalories"){
      for(var i=0;i <input.length; i++){
        if(input[i].calories >= 500){
          output.push(input[i]);
        }
      }
    return output;
  } else if (desiredSort === "lowCalories"){
      for(var i=0;i <input.length; i++){
        if(input[i].calories < 500){
          output.push(input[i]);
        }
      }
      return output;
    }else {
      return input;
    }
  }
}
