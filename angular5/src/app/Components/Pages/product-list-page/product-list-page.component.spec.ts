import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/Services/auth.service';

import { ProductListPageComponent } from './product-list-page.component';

describe('ProductListPageComponent', () => {
  let component: ProductListPageComponent;
  let fixture: ComponentFixture<ProductListPageComponent>;
  let authService:AuthService;
  let value:any;
  let data:any;
    beforeEach(() => {
      authService = jasmine.createSpyObj('AuthService', ['getProductList', 'getCartList', 'setList', 'setCart']);
      component = new ProductListPageComponent(authService);
    });
  
    it('should call getProductList and setList on authService', () => {
      component.ngOnInit();
      expect(authService.getProductList).toHaveBeenCalled();
      expect(authService.setList).toHaveBeenCalledWith(data);
    });
  
    it('should call getCartList and setCart on authService', () => {
      component.ngOnInit();
      expect(authService.getCartList).toHaveBeenCalled();
      expect(authService.setCart).toHaveBeenCalledWith(value);
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  

