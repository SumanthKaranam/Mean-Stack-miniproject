import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-truncate',
  templateUrl: './truncate.component.html',
  styleUrls: ['./truncate.component.css'],
})
export class TruncateComponent implements OnInit {
  products: any;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.products = this.authService.getData();
  }
}
