import {Component, EventEmitter} from 'angular2/core';
import { MealComponent} from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { ShowMealDetailComponent } from './show-meal-detail.component';
import { CaloriePipe } from './calorie.pipe';

@Component ({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent, ShowMealDetailComponent],
  pipes: [CaloriePipe],
  template: `
  <div class="row">
    <div class="col-xs-4 meal-box">
      <h2>Saved Meals</h2>
      <hr>
      <label for="sortCalorie">Sort by Calorie:</label>
      <select (change)="onChange($event.target.value)" name="sortCalorie">
        <option value ="low">Low(<500)</option>
        <option value ="high">High(500+)</option>
        <option value ="showall" selected="selected">All Meals</option>
      </select>
      <hr>
      <meal-display *ngFor="#currentMeal of mealList | calorie:selectedCalorie"
        (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal"
        [meal]="currentMeal">
      </meal-display>
      <button (click)="toggleAdd()" class="btn btn-primary pull-right">+</button>
    </div>
    <div *ngIf="showAddBox === true" class="col-xs-4 meal-box" id="add-box">
      <new-meal (onSubmitForm)="createMeal($event)"></new-meal>
    </div>
    <div *ngIf="showDetailBox === true">
      <show-meal-detail *ngIf="selectedMeal" [meal]="selectedMeal"></show-meal-detail>
    </div>
  </div>
  `
})

export class MealListComponent {
  public showAddBox: boolean = false;
  public showDetailBox: boolean = false;
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalorie: string="showall";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
    this.showDetailBox = true;
  }
  createMeal(inputArray): void {
    this.mealList.push(
      new Meal(inputArray[0], inputArray[1], inputArray[2], this.mealList.length)
    )
    this.toggleAdd();
  }
  toggleAdd(): void {
    this.showAddBox = !this.showAddBox;
    this.hideDetail();
  }
  hideDetail(): void {
    this.showDetailBox = false;
  }
  onChange(optionFromMenu){
  this.selectedCalorie = optionFromMenu;
  }
}
