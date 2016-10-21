import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
  <h1>Edit Meal List</h1>
  <div>
    <label>Enter Meal Name:</label>
    <input [(ngModel)]="childSelectedMeal.title">
  </div>
  <div>
    <label>Enter Meal Detail:</label>
    <input [(ngModel)]="childSelectedMeal.plato">
  </div>
  <div>
    <label>Enter Calories:</label>
    <input [(ngModel)]="childSelectedMeal.ibu">
    <button (click)="doneClicked()">Done</button>
  </div>
</div>
  `
})
export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
