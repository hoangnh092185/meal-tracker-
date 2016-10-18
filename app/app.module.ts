import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
// import { NewPintCountComponent } from './new-pint-count.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    // NewPintCountComponent
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
