import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { RadioButton } from '../../../constants';
@Component({
  selector: 'app-filter-by-price',
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['./filter-by-price.component.css'],
})
export class FilterByPriceComponent implements OnInit {
  radioButton = RadioButton;
  products: any;
  selection: any;
  productListData: any = [];
  count: any;
  Alldata: any = [];
  tempArray: any;
  newArray: any = [];
  constructor(private authService: AuthService) {}
  authFunction = () => {
    this.authService.setFilter(this.productListData);
    this.authService.setPriceSortBy(false);
    this.authService.setSortBy(this.productListData);
  };
  forCondition = () => {
    for (let i = 0; this.products.length > i; i++) {
      if (this.products[i].price <= this.selection) {
        if (this.tempArray < this.products[i].price) {
          this.productListData.push(this.products[i]);
        }
      }
    }
    this.authFunction();
  };
  pricerange = () => {
    this.authService.getChangeCatPrice().subscribe((value: any) => {
      this.count = value;
    });
    if (this.count == true) {
      if (this.selection == 'Allranges') {
        this.productListData = this.Alldata;
        this.authFunction();
      }
      this.forCondition();
    } else {
      this.authService.getFilterByCategory().subscribe((value: any) => {
        this.products = value;
      });
      if (this.selection == 'Allranges') {
        this.productListData = this.products;
        this.authFunction();
      }
      this.forCondition();
    }
  };
  OnClick(event: any) {
    this.productListData = [];
    this.selection = event.target.value;
    this.tempArray = event.target.alt;
    this.pricerange();
  }
  ngOnInit(): void {
    this.authService.getList().subscribe((value) => {
      this.products = value;
      this.productListData = value;
      this.Alldata = value;
    });
  }
}
