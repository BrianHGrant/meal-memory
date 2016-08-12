import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent} from './meal-list.component'

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Meal Memory Fitness Tracker</h1>
    <meal-list [meal-list]="meals"></meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals =
    [
      new Meal("Chicken Alfredo", 600, "1 cup, homemade w/ organic chicken, artichoke hearts")
    ]
  }
}
