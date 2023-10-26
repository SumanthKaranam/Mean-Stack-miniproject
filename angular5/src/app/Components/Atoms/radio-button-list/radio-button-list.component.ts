import { Component, EventEmitter, Input,Output } from '@angular/core';
@Component({
  selector: 'app-radio-button-list',
  templateUrl: './radio-button-list.component.html',
  styleUrls: ['./radio-button-list.component.css'],
})
export class RadioButtonListComponent{
  @Input() radioButton:any;
  @Output() buttonSorting = new EventEmitter<string>();
  onClick(event: any) {
    this. buttonSorting.emit(event);
  }
  constructor() {}
}
