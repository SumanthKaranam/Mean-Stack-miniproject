import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent  {
  @Input() sorting: any;
  @Output() selectItemEvent = new EventEmitter<string>();
  pricefilter(event: any) {
    this.selectItemEvent.emit(event);
  }
  constructor() {}
}
