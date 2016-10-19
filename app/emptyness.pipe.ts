import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './beer.model';

@ Pipe({
  name: 'emptyness',
  pure: false
})


export class EmptynessPipe implements PipeTransform {
  transform(input: Beer[], desiredEmptyness){
    var output: Beer[] = [];
    if(desiredEmptyness === "nearlyEmpty"){
      for(var i =0; i <input.length; i++){
        if (input[i].count <= 4){
            output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptyness === "notEmpty"){
        for (var i=0; i < input.length; i++){
            if (input[i].count >=5){
              output.push(input[i]);
            }
        }
    return output;
      }else {
        return input
      }
  }
}
