import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitForm'],
  template: `

    <h3>Add a new meal:</h3>
    <div class="form-group">
      <label for="name">Meal Name:</label>
      <input type="text" class="form-control" id="name" #addName>
    </div>
    <div class="form-group">
      <label for="brand">Calories:</label>
      <input type="number" class="form-control" id="calories" #addCalories>
    </div>
    <div class="form-group">
      <label for="Description">Meal Details:</label>
      <input type="text" class="form-control" id="details" #addDetails>
    </div>
    <button (click)="addMeal(addName, addCalories, addDetails)" class="btn btn-success add-button pull-right">Add a Meal</button>

  `
})

export class NewMealComponent {
  public onSubmitForm: EventEmitter<String[]>
  constructor(){
    this.onSubmitForm = new EventEmitter();
  }
  addMeal(addName: HTMLInputElement, addCalories: HTMLInputElement, addDetails: HTMLInputElement) {
    this.onSubmitForm.emit([addName.value, addCalories.value, addDetails.value]);
    addName.value="";
    addCalories.value="";
    addDetails.value="";
  }
}
