import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { BeerListComponent } from './beer-list.component';
import { EditBeerComponent } from './edit-beer.component';
import { NewBeerComponent } from './new-beer.component';
import { EmptynessPipe } from './emptyness.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    BeerListComponent,
    EditBeerComponent,
    NewBeerComponent,
    EmptynessPipe,
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
