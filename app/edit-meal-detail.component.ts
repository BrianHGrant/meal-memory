import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: "edit-meal-detail",
  inputs: ['meal'],
  template: `
  <div class="col-xs-4 meal-box" id="edit-box">
    <h2>Edit Meal</h2>
    <hr>
      <div class="form-group">
        <label for="name">Edit Name:</label>
        <input [(ngModel)]="meal.name" class="form-control" name="name">
      </div>
      <div class="form-group">
        <label for="calories">Calories:</label>
        <input [(ngModel)]="meal.calories" class="form-control" name="calories">
      </div>
      <div class="form-group">
        <label for="detail">Details:</label>
        <input [(ngModel)]="meal.details" class="form-control" name="detail">
      </div>
  </div>
  `
})

export class EditMealDetailComponent {
  public meal: Meal;
}
