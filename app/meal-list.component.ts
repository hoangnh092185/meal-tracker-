import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-list',
    template: `
     <div class="jumbotron" *ngFor="let currentMeal of childMealList">
       <h3>Meal:  {{currentMeal.name}}</h3>
       <h3>Detail: {{currentMeal.detail}}</h3>
       <h3>Calories: {{currentMeal.calories}}</h3>
         <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
     </div>
  `
})
export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickEditMealSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal){
    console.log("button clicked: "+ mealToEdit.name);
    this.clickEditMealSender.emit(mealToEdit);
  }
}
