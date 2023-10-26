import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.products = this.authService.getData();
  }
  goback() {
    this.authService.setLatestQuantity(1);
  }
}
