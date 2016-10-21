import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-meal',
  template: `
    <h1>Add Meal</h1>
    <div class="header jumbotron meal row container">
  <div class="col-sm-2">
    <label>Enter meal name:</label>
    <input #newName>
  </div>
  <div class="col-sm-2">
    <label>Enter meal detail:</label>
    <input #newDetail>
  </div>
  <div class="col-sm-2">
    <label>Enter meal calories:</label>
    <input #newCalories>
  </div>
  <button class="btn btn-primary" (click)="
  addClicked(newName.value, newDetail.value, newCalories.value);
  newName.value='';
  newDetail.value='';
  newCalories.value='';
  ">Add New Meal</button>
  </div>
  `
})

export class AddMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, detail: string, calories: number){
    var newMealToAdd: Meal = new Meal(name, detail, calories);
      this.newMealSender.emit(newMealToAdd);
  }
}
