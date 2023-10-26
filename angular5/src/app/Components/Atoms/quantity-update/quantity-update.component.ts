import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-quantity-update',
  templateUrl: './quantity-update.component.html',
  styleUrls: ['./quantity-update.component.css'],
})
export class QuantityUpdateComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  quantity: number = 1;
  i = 1;
  plus() {
    if (this.i > 0) {
      this.i++;
      this.quantity = this.i;
    }
    console.log('i', this.i);
    this.authService.setLatestQuantity (this.i);
  }
  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
    }
    this.authService.setLatestQuantity (this.i);
  }
}
