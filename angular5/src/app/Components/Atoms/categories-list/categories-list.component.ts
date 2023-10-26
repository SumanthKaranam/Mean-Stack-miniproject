import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  productListData: any = [];
  products: any = [];
  constructor(private authService: AuthService, private route: Router) {}
  authFunction=()=>{
    this.authService.setChangeCatPrice(false);
    this.authService.setFilter(this.productListData);
    this.authService.setCategorySortBy(false);
    this.authService.setFilterByCategory(this.productListData);
  }
  filter(category: string) {
    if (category == 'AllCategories') {
      this.productListData = this.products;
      this.authFunction()
    } else {
      this.productListData = [];
      for (let i = 0; this.products.length > i; i++) {
        if (category == this.products[i].category) {
          this.productListData.push(this.products[i]);
        }
      }
      this.authFunction()
    }
  }
  category: any = [];
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
