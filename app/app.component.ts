import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component'
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Meal Memory Fitness Tracker</h1>
    <meal-list
      [mealList]="meals">
    </meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals =
    [
      new Meal("Chicken Alfredo", 600, "1 cup, homemade w/ organic chicken, artichoke hearts", 1),
      new Meal("Green Smoothie", 420, "Bananna, pineapple, ginger, pear, kale, spinich", 2),
      new Meal("Full Breakfast", 800, "Eggs, Hash browns, sausage, pancakes", 3),
      new Meal("Yogurt Parfait", 150, "Yogart, oatmeal, cranberries", 4)
    ]
  }
}
