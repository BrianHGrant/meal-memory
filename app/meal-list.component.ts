import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent} from './meal.component'

@Component ({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent],
  template: `
  <meal-display *ngFor="#currentMeal of mealList"
    [class.selected]="currentMeal===selectedMeal"
    (click)="mealClicked(currentMeal)"
    [restaurant]="currentMeal">
  </meal-display>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
    console.log(this.selectedMeal);
  }
}
