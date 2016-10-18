import { Component } from '@angular/core';
import { Beer } from './beer.model';
// import { NewPintCountComponent } from './new-pint-count.component';

@
Component({
    selector: 'my-app',
    template: `
    <div class="container">
      <div class="container">

        <h4>Beer List</h4>
        <div class="row beer" *ngFor="let beer of beerList">
          <div class="col-sm-8"><img src="./../resources/image/{{beer.image}}" alt="" /></div>
          <div class="col-sm-4 brew-note">
            <ul class="list-group jumbotron">
            <h4>{{beer.title}}</h4>
              <li class="list-group-item">{{beer.plato}}
                <sup>degree plato</sup></li>
              <li class="list-group-item">{{beer.ibu}}
                <sup>ibu</sup></li>
              <li class="list-group-item"><sup>ALC</sup>
              {{beer.abv}}%
              <sup>By Volume</sup></li>
            </ul>

            <h4>Beer Price</h4>
            <div class="jumbotron beer-price"><h4>$ {{beer.price}}</h4></div>



            <h4>Pints Count</h4>

            <div class="jumbotron pints-left">Pints Remaining: {{beer.count}} <p id="demo"></p> </div>
            <button class="btn btn-primary" (click)="sellBeer(beer)">Buy Pint</button>

          </div>

        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  // public Count = number;
  public beerList: Beer[] = [
    new Beer("Emperial Stout", 16, 55, 9.8, "emperialStout2.jpg", 4),
    new Beer("Gear Up IPA", 14, 65, 6.2, "gearUp.png",4),
    new Beer("Organic hopworks", 14, 75, 6.6, "hub.png",4),
    new Beer("organic hub lager", 11.5, 32, 5.1, "hubLager.png",4),
    new Beer("NONSTOP HEF HOP", 10.5, 20, 3.9, "hefHop.png",4),
    new Beer("organic survival", 15, 35, 5.8, "stout.png",4),
    new Beer("Deluxe organic ale", 16, 55, 7.0, "DOA.png",4)
  ];
  sellBeer(thisBeer : Beer){
    if(thisBeer.count > 0){
      thisBeer.count -= 1;
    }else {
      alert("Keg empty.");
    }
  }

}
