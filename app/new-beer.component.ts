import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'new-beer',
  template: `
  <h1>New Beer</h1>
  <div class="header jumbotron beer row container">
  <div class="col-sm-2">
    <label>Enter beer tittle:</label>
    <input #newTitle>
  </div>
  <div class="col-sm-2">
    <label>Enter beer plato:</label>
    <input #newPlato>
  </div>
  <div class="col-sm-2">
    <label>Enter beer ibu:</label>
    <input #newIbu>
  </div>
  <div class="col-sm-2">
    <label>Enter beer abv:</label>
    <input #newAbv>
  </div>
  <div class="col-sm-2">
    <label>Enter beer image:</label>
    <input #newPrice>
  </div>
  <div class="col-sm-2">
    <label>Enter beer price:</label>
    <input #newImage>
  </div>
  <div>
    <select #newCategory>
      <option>*</option>
      <option>**</option>
      <option>***</option>
    </select>
    <button class="btn btn-primary" (click)="
      addClicked(newTitle.value, newPlato.value, newIbu.value, newAbv.value, newPrice.value, newImage.value);
      newTitle.value='';
      newPlato.value='';
      newIbu.value='';
      newAbv.value='';
      newPrice.value='';
      newImage.value='';
    ">Add</button>
  </div>
  </div>
  `
})

export class NewBeerComponent {
  @Output() newBeerSender = new EventEmitter();
  addClicked(title: string, plato: number, ibu: number, abv: number, image: string, price: number){
    var newBeerToAdd: Beer = new Beer(title, plato, ibu, abv, image, price);
    this.newBeerSender.emit(newBeerToAdd);
  }
}
