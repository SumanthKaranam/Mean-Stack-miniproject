import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent  {
  constructor() {}
  @Output() button = new EventEmitter<string>();
  SuccessNotification() {
    this. button.emit();
  }
}
