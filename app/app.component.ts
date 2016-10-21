import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'my-app',
    template: `
  <h1>Meal-Tracker</h1>



  `
})
export class AppComponent {
  public masterMealList: Meal[] = [

  ];

}
