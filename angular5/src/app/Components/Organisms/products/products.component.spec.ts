import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
 import { ProductsComponent } from './products.component';
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let authService: AuthService;
  let httpTestingController : HttpTestingController;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ProductsComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ProductsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
      ],
      providers : [
        AuthService
      ]
    });
    authService = TestBed.inject(AuthService);
    component = new ProductsComponent(authService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should sort the product list by price in ascending order', () => {
    // Arrange
    component.productListData = [      { name: 'product1', price: 10 },      { name: 'product2', price: 5 },      { name: 'product3', price: 15 }    ];

    // Act
    component.priceFilter({ target: { value: 'Price-Low to High' } });

    // Assert
    expect(component.productListData[0].price).toBe(5);
    expect(component.productListData[1].price).toBe(10);
    expect(component.productListData[2].price).toBe(15);
  });

  it('should sort the product list by price in descending order', () => {
    // Arrange
    component.productListData = [      { name: 'product1', price: 10 },      { name: 'product2', price: 5 },      { name: 'product3', price: 15 }    ];

    // Act
    component.priceFilter({ target: { value: 'Price-High to low' } });

    // Assert
    expect(component.productListData[0].price).toBe(15);
    expect(component.productListData[1].price).toBe(10);
    expect(component.productListData[2].price).toBe(5);
  });
  it('should call the authservice methods on ngOnInit',() =>{
    spyOn(authService, 'getChangeCatPrice').and.returnValue(of(true));
    spyOn(authService, 'getList').and.returnValue(of([]));
    spyOn(authService, 'getPriceSortBy').and.returnValue(of(true));
    spyOn(authService, 'getSortBy').and.returnValue(of([]));
    spyOn(authService, 'getCategorySortBy').and.returnValue(of(true));
    spyOn(authService, 'getFilterByCategory').and.returnValue(of([]));
    spyOn(authService, 'setFilter');

    component.ngOnInit();
    expect(authService.getChangeCatPrice).toHaveBeenCalled();
    expect(authService.getList).toHaveBeenCalled();
    expect(authService.getPriceSortBy).toHaveBeenCalled();
    expect(authService.getSortBy).toHaveBeenCalled();
    expect(authService.getCategorySortBy).toHaveBeenCalled();
    expect(authService.getFilterByCategory).toHaveBeenCalled();
    expect(authService.setFilter).toHaveBeenCalledWith([]);
  });


});

