import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-list',
    template: `
  <h1>Meal-Tracker</h1>
  <div *ngFor="let currentMeal of childMealList">
    <div class="jumbotron">
      <h3>{{currentMeal.name}}<h3><br>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  </div>
  `
})
export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
}
