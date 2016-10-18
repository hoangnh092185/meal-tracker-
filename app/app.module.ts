import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { BeerListComponent } from './beer-list.component';
import { EditBeerComponent } from './edit-beer.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    BeerListComponent,
    EditBeerComponent
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
