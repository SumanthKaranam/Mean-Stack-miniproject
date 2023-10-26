import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent  {
  @Input() products: any;
  @Output() cardItem = new EventEmitter<string>();
  constructor() {}
  details(value: any) {
    this.cardItem.emit(value);
  }
}
