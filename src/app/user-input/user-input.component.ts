import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() inputValueEmitter = new EventEmitter<string>();
  inputValue: string='';

  submitInput() {
    this.inputValueEmitter.emit(this.inputValue);
    this.inputValue = '';
  }
}
