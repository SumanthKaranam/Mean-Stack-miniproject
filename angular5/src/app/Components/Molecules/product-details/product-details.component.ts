import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  count: any;
  products: any;
  total: any;
  cartlist: any;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.products = this.authService.getData();
    // this.authService.setlatestdetails(this.products)
    this.total = this.products.price;;
    this.authService.getLatestQuantity ().subscribe((value) => {
      this.count = value;
      this.total = this.products.price * this.count;
    });
  }
  successNotification() {
    this.products = this.authService.getData();
    this.authService.getLatestQuantity ().subscribe((value) => {
      this.products.quantity = value;
      this.products.totalprice = value * this.products.price;
    });

    this.authService.postToCart(this.products).subscribe((res) => {
      this.authService.getCartList().subscribe((value) => {
        this.cartlist = value;
        this.count = this.cartlist.length;
        console.log(this.cartlist, this.count);
        this.authService.setCartCount(this.count);
      });
    });
    // this.authService.getcart().subscribe(value=>{
    //   this.cartlist=value
    //   this.count=this.cartlist.length
    //   console.log(this.cartlist,this.count)
    //   this.authService.setcartcount(this.count)
    // })
    console.log(this.products);
    //  this.authService.setlatestquan(1)
    Swal.fire('Hey!', 'Your item has been added to Cart!', 'success');
  }
}
