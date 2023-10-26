import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  products: any;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.products = this.authService.getData();
  }
}
