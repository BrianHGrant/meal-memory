import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe ({
  name: 'calorie',
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], info){
    var desiredCalorie = info[0];
    var output: Meal[] =[];
    for(var i = 0; i < input.length; i++){
      if(desiredCalorie === "low"){
        if(input[i].calories < 500){
          output.push(input[i]);
        }
      } else if (desiredCalorie === "high"){
        if(input[i].calories >= 500){
          output.push(input[i]);
        }
      } else {
        return input;
      }
    }
    return output;
  }
}
