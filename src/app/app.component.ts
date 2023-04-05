import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-exercise-0';
  words: string[] = [];
  isEven = true;

  handleInputValue(inputValue: string) {
    this.words = inputValue.split(' ');
    this.isEven = this.words.every((word) => word.length % 2 === 0);
  }
}
