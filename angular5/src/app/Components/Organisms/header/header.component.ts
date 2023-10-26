import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 cartlist:any;
 count:any;
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    this.authService.getCart().subscribe(value=>{
      this.cartlist=value
      this.count=this.cartlist.length
    })
    this.authService.getCartCount().subscribe(value=>{
      this.count=value
    })
  }
  
}
