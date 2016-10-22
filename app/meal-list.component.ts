import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-list',
    template: `
    <select class="jumbotron" (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="highCalories">High calories</option>
      <option value="lowCalories">Low calories </option>
    </select>
     <div class="jumbotron" *ngFor="let currentMeal of childMealList | sort : selectedSort">
       <h3>Meal:  {{currentMeal.name}}</h3>
       <h3>Detail: {{currentMeal.detail}}</h3>
       <h3>Calories: {{currentMeal.calories}}</h3>
         <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
     </div>
  `
})
export class MealListComponent {
  public selectedSort: string = "";
  @Input() childMealList: Meal[];
  @Output() clickEditMealSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal){
    console.log("button clicked: "+ mealToEdit.name);
    this.clickEditMealSender.emit(mealToEdit);
  }
  onChange(optionFromMenu){
    this.selectedSort = optionFromMenu;
    console.log(this.selectedSort)
  }
}
