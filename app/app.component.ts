import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'my-app',
    template: `
    <h1 class="header jumbotron">Meal-Tracker</h1>
    <div class="jumbotron" *ngFor="let meal of masterMealList">
      <h3> {{meal.name}}</h3>
      <h3>{{meal.detail}}</h3>
      <h3>{{meal.calories}}</h3>
    </div>

  `
})
export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
    new Meal("Fries", "I only ate half of them", 365)
  ];
}

// <div>
//   <meal-list
//     [childMealList]="masterMealList"
//     (clickSender)="showDetails($event)"
//   ></meal-list>
// </div>
