import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { AddMealComponent } from './add-meal.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    MealListComponent,
    EditMealComponent,
    AddMealComponent,

  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
