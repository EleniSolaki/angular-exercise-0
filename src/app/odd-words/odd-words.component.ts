import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-words',
  templateUrl: './odd-words.component.html',
  styleUrls: ['./odd-words.component.css']
})
export class OddWordsComponent {
  @Input()oddWords: string[]=[];
}
