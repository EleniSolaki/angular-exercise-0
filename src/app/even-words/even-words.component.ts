import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-words',
  templateUrl: './even-words.component.html',
  styleUrls: ['./even-words.component.css']
})
export class EvenWordsComponent {
 @Input()words: string[]=[];
}
