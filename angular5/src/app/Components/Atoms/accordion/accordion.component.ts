import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent  {
  @ViewChild(MatAccordion) 'accordion': MatAccordion;
  @Input() category: any;
  @Input() subcategory:any;
  @Output() FilterSorting = new EventEmitter<string>();
  @Output() SubFilterSorting = new EventEmitter<string>();
  filter(event: any) {
    this.FilterSorting.emit(event);
  }
  subfilter(event: any) {
    this.SubFilterSorting.emit(event);
  }
  constructor() {
  }
}
