import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  productListData: any = [];
  products: any = [];
  category: any = [];
  subcategory: any = [];
  constructor(private authService: AuthService) {}
  authFunction=()=>{
    this.authService.setChangeCatPrice(false);
    this.authService.setFilter(this.productListData);
    this.authService.setCategorySortBy(false);
    this.authService.setFilterByCategory(this.productListData);
  }
  filter() {
    this.authService.getList().subscribe((value) => {
      this.productListData = value;
      this.authFunction()
    });
  }
  Filter(category: any) {
      this.productListData = [];
      for (let i = 0; this.products.length > i; i++) {
        if (category == this.products[i].category) {
          this.productListData.push(this.products[i]);
        }
      }
      this.authFunction()
    this.subcategory=[]
      for (let i = 0; i < this.products.length; i++) {
        if ( category== this.products[i].category) {
          let findsubcategory = this.subcategory.find(
            (value: any) => value == this.products[i].subCategory
          );
          if (findsubcategory == null) {
            this.subcategory.push(this.products[i].subCategory);
          }
        }
      }
  }
  subfilter(subcategory: any) {
    this.productListData = [];
    for (let i = 0; this.products.length > i; i++) {
      if (subcategory == this.products[i].subCategory) {
        this.productListData.push(this.products[i]);
      }
    }
    this.authFunction()
  }
  ngOnInit(): void {
    this.authService.getList().subscribe((value) => {
      this.products = value;
      for (let i = 0; i < this.products.length; i++) {
        let findcategory = this.category.find(
          (value: any) => value == this.products[i].category
        );

        if (findcategory == null) {
          this.category.push(this.products[i].category);
        }
      }
    });
  }
}
