import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css'],
})
export class ProductListPageComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getProductList().subscribe((data) => {
      this.authService.setList(data);
    });
    this.authService.getCartList().subscribe((value) => {
      this.authService.setCart(value);
    });
  }
}
