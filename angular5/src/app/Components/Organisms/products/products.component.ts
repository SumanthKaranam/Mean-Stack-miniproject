import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Sorting } from '../../../constants';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  sorting = Sorting;
  priceArray: any = [];
  filterArray: any = [];
  selection: any;
  productListData: any = [];
  count: any;
  filtercount: any;
  pricecount: any;
  sortName:any;
  constructor(private authService: AuthService) {}
  sortFunction = () => {
    for (let i = 0; i < this.productListData.length; i++) {
      this.priceArray.push(this.productListData[i].price);
    }
    this.priceArray.sort(function (a: any, b: any) {
      return a - b;
    });
  };
  sortMethod = () => {
    if(this.sortName=="Price-High to low"){
      this.priceArray.reverse()    
    }
    for (let i = 0; i < this.priceArray.length; i++) {
      for (let j = 0; j < this.productListData.length; j++) {
        if (this.priceArray[i] == this.productListData[j].price) {
          this.filterArray.push(this.productListData[j]);
        }
      }
    }
    this.productListData = this.filterArray;
  };
  ngOnInit(): void {
    this.authService.getChangeCatPrice().subscribe((value: any) => {
      this.count = value;
    });
    if (this.count == true) {
      this.authService.getList().subscribe((value) => {
        this.productListData = value;
      });
    }
    this.authService.getPriceSortBy().subscribe((value) => {
      this.pricecount = value;
    });
    if (this.pricecount == true) {
      this.authService.getSortBy().subscribe((value: any) => {
        this.productListData = value;
      });
    }
    this.authService.getCategorySortBy().subscribe((value) => {
      this.filtercount = value;
    });
    if (this.filtercount == true) {
      this.authService.getFilterByCategory().subscribe((value: any) => {
        this.productListData = value;
      });
    }
  }
  priceFilter(event: any) {
    this.filterArray = [];
    this.priceArray = [];
    this.sortName=event.target.value
    // if (event.target.value == 'Price-Low to High') {
    //   this.sortFunction();
    //   this.sortMethod();
    // } else if (event.target.value == 'Price-High to low') {
    //   this.sortFunction();
    //   this.sortMethod();
    // }
    this.sortFunction();
    this.sortMethod();
    this.authService.setFilter(this.productListData);
  }
}
