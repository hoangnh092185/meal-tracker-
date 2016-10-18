import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'edit-beer',
  template: `
  <div *ngIf="childSelectedBeer">
    <h1>Edit Beer List</h1>
    <div>
      <label>Enter Beer Name:</label>
      <input [(ngModel)]="childSelectedBeer.title">
    </div>
    <div>
      <label>Enter Plato:</label>
      <input [(ngModel)]="childSelectedBeer.plato">
    </div>
    <div>
      <label>Enter IBU:</label>
      <input [(ngModel)]="childSelectedBeer.ibu">
    </div>
    <div>
      <label>Enter Alcohol %:</label>
      <input [(ngModel)]="childSelectedBeer.abv">
    </div>
    <div>
      <label>Enter Price:</label>
      <input [(ngModel)]="childSelectedBeer.price">
      <button (click)="doneClicked()">Done</button>
    </div>
  </div>

  `
})

export class EditBeerComponent {
  @Input() childSelectedBeer: Beer;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
