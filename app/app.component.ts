import { Component } from '@angular/core';
import { Beer } from './beer.model';

@Component({
    selector: 'my-app',
    template: `
    <new-beer
      (newBeerSender)="addBeer($event)"
    ></new-beer>
    <div class="row">
      <div class="col-sm-8 fluid">
      <beer-list
        [childBeerList]="masterBeerList"
        (clickSender)="showDetails($event)"
      ></beer-list>
      </div>
      <div class="col-sm-4 fluid">
      <edit-beer
            [childSelectedBeer]="selectedBeer"
            (doneClickedSender)="finishedEditing()"
      ></edit-beer>
      </div>
    </div>



  `
})
export class AppComponent {
  public masterBeerList: Beer[] = [
    new Beer("Emperial Stout", 16, 55, 9.8, "emperialStout2.jpg", 4),
    new Beer("Gear Up IPA", 14, 65, 6.2, "gearUp.png",4),
    new Beer("Organic hopworks", 14, 75, 6.6, "hub.png",4),
    new Beer("organic hub lager", 11.5, 32, 5.1, "hubLager.png",4),
    new Beer("NONSTOP HEF HOP", 10.5, 20, 3.9, "hefHop.png",4),
    new Beer("organic survival", 15, 35, 5.8, "stout.png",4),
    new Beer("Deluxe organic ale", 16, 55, 7.0, "DOA.png",4)
  ];
  selectedBeer: Beer = null;
  showDetails(clickedBeer: Beer) {
    this.selectedBeer = clickedBeer;
  }
  finishedEditing() {
     this.selectedBeer = null;
  }
  addBeer(newBeerFromChild: Beer){
    this.masterBeerList.push(newBeerFromChild);
  }

}
