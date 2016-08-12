import {Component, EventEmitter, ViewEncapsulation,ViewChild} from 'angular2/core';
import { MealComponent} from './meal.component'
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component ({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="row">
    <div class="col-xs-4 meal-box">
      <h2>Saved Meals</h2>
      <hr>
      <meal-display *ngFor="#currentMeal of mealList"
        (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal"
        [meal]="currentMeal">
      </meal-display>
      <button (click)="toggleAdd()" class="btn btn-primary pull-right">Add a meal</button>
    </div>
    <div *ngIf="showAddBox === true" class="col-xs-4 meal-box" id="add-box">
      <new-meal (onSubmitForm)="createMeal($event)"></new-meal>
    </div>
  </div>

  `
})

export class MealListComponent {
  public showAddBox: boolean = false;
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(inputArray): void {
    this.mealList.push(
      new Meal(inputArray[0], inputArray[1], inputArray[2], this.mealList.length)
    )
    this.toggleAdd();
  }
  toggleAdd(): void {
    this.showAddBox = !this.showAddBox;
  }

}
