import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealDetailComponent } from "./edit-meal-detail.component";
@Component({
  selector: 'show-meal-detail',
  inputs: ['meal'],
  directives: [EditMealDetailComponent],
  template: `
    <div class="col-xs-4 meal-box" id="detail-box">
    <button (click)="toggleEdit()" class="btn btn-primary pull-right">&#x270f;</button>
      <h2>Details</h2>
      <hr>
      <h4>Meal Name: {{meal.name}}</h4>
      <h4>Calories: {{meal.calories}} </h4>
      <h4>Details: {{meal.details}}</h4>
    </div>
    <div *ngIf="showEditBox === true">
      <edit-meal-detail [meal] = "meal"></edit-meal-detail>
    </div>
  `
})

export class ShowMealDetailComponent {
  public showEditBox: boolean = false;
  public meal: Meal;

  toggleEdit(): void {
    this.showEditBox = !this.showEditBox;
  }
}
