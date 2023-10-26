import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/Services/auth.service';

import { ProductComponent } from './product.component';

// describe('ProductComponent', () => {
//   let component: ProductComponent;
//   let fixture: ComponentFixture<ProductComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ProductComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ProductComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Component: TestComponent', () => {
  let component: ProductComponent;
  let authService: AuthService;
  let fixture: ComponentFixture<ProductComponent>;
    beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductComponent, AuthService]
    });
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
component = new ProductComponent(authService);
  });

  it('should set the products property to the value returned from authService.getData()', () => {
    spyOn(authService, 'getData').and.returnValue({});
    component.ngOnInit();
    expect(component.products).toEqual({});
  });

  it('should call authService.setLatestQuantity with a value of 1', () => {
    spyOn(authService, 'setLatestQuantity');
    component.goback();
    expect(authService.setLatestQuantity).toHaveBeenCalledWith(1);
  });
    it('should create', () => {
    expect(component).toBeTruthy();
  });
});