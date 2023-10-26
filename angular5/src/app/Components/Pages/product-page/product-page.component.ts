import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  products: any;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.products = this.authService.getData();
    this.authService.getCartList().subscribe((value) => {
      this.authService.setCart(value);
    });
  }
}
