import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-list',
  template: `
    <h4 class="header jumbotron">Beer List</h4>
    <div class="row beer" *ngFor="let beer of childBeerList">
      <div class="col-sm-8"><img src="./../resources/image/{{beer.image}}" alt="" /></div>
      <div class="col-sm-4 brew-note">
        <ul class="list-group jumbotron">
          <h4>{{beer.title}}</h4>
          <li class="list-group-item">{{beer.plato}}
            <sup>degree plato</sup></li>
          <li class="list-group-item">{{beer.ibu}}
            <sup>ibu</sup></li>
          <li class="list-group-item"><sup>ALC</sup> {{beer.abv}}%
            <sup>By Volume</sup></li>
        </ul>
        <h4>Beer Price</h4>
        <div class="jumbotron beer-price">
          <h4>$ {{beer.price}}</h4>
        </div>
        <div class="jumbotron pints-left">Pints Remaining: {{beer.count}}
          <p id="demo"></p>
          <button class="btn btn-primary" (click)="sellBeer(beer)">Buy Pint</button>
        </div>
      </div>
    </div>
  `
})

  export class BeerListComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(beerToEdit: Beer) {
    this.clickSender.emit(beerToEdit);
  }
  sellBeer(thisBeer : Beer){
    if(thisBeer.count > 0){
      thisBeer.count -= 1;
    }else {
      alert("Keg empty.");
    }
  }
}
