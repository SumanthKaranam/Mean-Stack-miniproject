import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/Services/auth.service';
import{HttpClientTestingModule} from '@angular/common/http/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let http:HttpClientTestingModule;
  let service:AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports:[HttpClientTestingModule],
      providers:[AuthService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should get all the products',()=>{
  //   AuthService.getList().subscribe((value) => {
  //     products = value;
  //   });
  // })
});
