import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/Services/auth.service';
import { of } from 'rxjs';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;
  let spy: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
component = new HeaderComponent(authService);
  });

  it('should call getCart and getCartCount on ngOnInit', () => {
    spy = spyOn(authService, 'getCart').and.returnValue(of([]));
    spyOn(authService, 'getCartCount').and.returnValue(of(0));

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(authService.getCartCount).toHaveBeenCalled();
  });

  it('should update cartlist and count on successful getCart', () => {
    spyOn(authService, 'getCart').and.returnValue(of([1, 2, 3]));
    spyOn(authService, 'getCartCount').and.returnValue(of(0));
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(authService.getCartCount).toHaveBeenCalled();
  });

  it('should update cartlist and count on successful getCart', () => {
    spyOn(authService, 'getCart').and.returnValue(of([1, 2, 3]));
    spyOn(authService, 'getCartCount').and.returnValue(of(0));
    component.ngOnInit();
    expect(component.cartlist).toEqual([1, 2, 3]);
    expect(component.count).toEqual(3);
  });

  it('should update count on successful getCartCount', () => {
    spyOn(authService, 'getCart').and.returnValue(of([]));
    spyOn(authService, 'getCartCount').and.returnValue(of(5));
    component.ngOnInit();
    expect(component.count).toEqual(5);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
