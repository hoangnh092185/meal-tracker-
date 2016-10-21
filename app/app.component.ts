import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'my-app',
    template: `
      <h1 class="header jumbotron">Meal-Tracker</h1>

      <div class="container">
      <add-meal
      [newMealSender]="addMeal($event)"
      ></add-meal>
      <meal-list
        [childMealList]="masterMealList"
        (clickSender)="showDetails($event)"
      ></meal-list>
      <edit-meal
        [childSelectedMeal]="selectedMeal"
        (doneClickedSender)="finishedEditing()"
      ></edit-meal>
    </div>
  `
})
export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
    new Meal("Fries", "I only ate half of them", 365)
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
  }
  finishedEditing(){
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal){
    this.masterMealList.push(newMealFromChild);
  }
}

// <div class="jumbotron" *ngFor="let meal of masterMealList">
//   <h3>Meal:  {{meal.name}}</h3>
//   <h3>Detail: {{meal.detail}}</h3>
//   <h3>Calories: {{meal.calories}}</h3>
//     <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
// </div>
