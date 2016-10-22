import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'my-app',
    template: `
      <h1 class="header jumbotron">Meal-Tracker</h1>
      <div class="container">
      <div class="row">
      <div clas="col-sm-12">
        <add-meal
        (newMealSender)="addMeal($event)"
        ></add-meal>
      </div>
        <div class="col-sm-8">
        <meal-list
          [childMealList]="masterMealList"
          (clickEditMealSender)="showClickedEditMealDetails($event)"
        ></meal-list>
        </div>
        <div class="col-sm-4">
        <edit-meal
          [childSelectedMeal]="selectedMeal"
          (doneClickedSender)="finishedEditing()"
        ></edit-meal>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {

  public masterMealList: Meal[] = [
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
    new Meal("Fries", "I only ate half of them", 365),
    new Meal("Angel Hair Shrimp pasta", "It feel good to eat it all", 1000)
  ];
  selectedMeal = null;
  showClickedEditMealDetails(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
    console.log(clickedMeal);
  }
  finishedEditing(){
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal){
    this.masterMealList.push(newMealFromChild);
  }
}
