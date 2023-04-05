import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { EvenWordsComponent } from './even-words/even-words.component';
import { OddWordsComponent } from './odd-words/odd-words.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    EvenWordsComponent,
    OddWordsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
