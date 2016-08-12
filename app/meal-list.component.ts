import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [],
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
  public onMealSelect: EventEmitter<Meal>;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
