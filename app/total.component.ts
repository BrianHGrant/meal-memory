import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'total-display',
  inputs: ['total', 'average'],
  template: `
  <h4>Total Calories: {{total}}</h4>
  <h4>Average Calories: {{average}}</h4>
  `
})

export class TotalComponent {
  public total: number;
  public average: number;
}
