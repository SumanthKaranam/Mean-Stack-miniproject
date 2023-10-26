import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getList().subscribe((value) => {
      this.products = value;
    });
    this.authService.getFilter().subscribe((value) => {
      this.products = value;
    });
  }
  details(product: any) {
    this.authService.setData(product);
  }
}
