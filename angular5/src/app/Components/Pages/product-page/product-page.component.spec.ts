import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/Services/auth.service';
import { of } from 'rxjs';
import { ProductPageComponent } from './product-page.component';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let authService:AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
component = new ProductPageComponent(authService);
  });

  it('should set the products property to the value returned from authService.getData()', () => {
    spyOn(authService, 'getData').and.returnValue({});
    component.ngOnInit();
    expect(component.products).toEqual({});
  });

  it('should call authService.setCart with the value returned from authService.getCartList()', () => {
    spyOn(authService, 'getCartList').and.returnValue(of([1, 2, 3]));
    spyOn(authService, 'setCart');
    component.ngOnInit();
    expect(authService.setCart).toHaveBeenCalledWith([1, 2, 3]);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// describe('Component: TestComponent', () => {
//   let component: TestComponent;
//   let authService: AuthService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [TestComponent, AuthService]
//     });
//     component = TestBed.get(TestComponent);
//     authService = TestBed.get(AuthService);
//   });

//   it('should set the products property to the value returned from authService.getData()', () => {
//     spyOn(authService, 'getData').and.returnValue({});
//     component.ngOnInit();
//     expect(component.products).toEqual({});
//   });

//   it('should call authService.setCart with the value returned from authService.getCartList()', () => {
//     spyOn(authService, 'getCartList').and.returnValue(of([1, 2, 3]));
//     spyOn(authService, 'setCart');
//     component.ngOnInit();
//     expect(authService.setCart).toHaveBeenCalledWith([1, 2, 3]);
//   });
// });