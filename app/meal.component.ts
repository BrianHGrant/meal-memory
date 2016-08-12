import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <h4>{{meal.name}}</h4>
  `
})

export class MealComponent {
  public meal: Meal;
}
