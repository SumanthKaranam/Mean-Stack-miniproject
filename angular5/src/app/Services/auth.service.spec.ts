import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

interface Data{
  "_id":String,
  "id": String,
  "brand": String,
  "name": String,
  "description":String, 
  "price":String,
  "image": String,
  "category": String,
  "subCategory": String,
  "quantity": String,
}
const testUrl="http://localhost:2000/api/getProductList"

const ProductData:Data=
  {
    "_id": "638f33e340716d29bfc35e4f",
    "id": "c4sc1p4",
    "name": "Luxury Hammock Swing",
    "brand": "Hammock Chairs",
    "description": "Furniture kart Luxury Hammock Swing Chair Jhoola Hanging Egg Chair Black with Red Cushions Steel Large Swing  (Black, Red, Pack of 3, Pre-assembled)",
    "price": "5199",
    "image": "https://rukminim1.flixcart.com/image/612/612/khkvukw0-0/hammock-swing/8/l/x/cswbk001-duzo-original-imafxkgzk2we4h5a.jpeg?q=70",
    "category": "Outdoor",
    "subCategory": "Swinging Chairs",
    "quantity": "25"
  }
describe('AuthService', () => {
  let service: AuthService;
  let httpclient:HttpClient;
  let httpTestingController : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
      ],
      providers : [
        AuthService
      ]
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should retrive all products data', () => {
    service.getProductList().subscribe((products:any) => {
      expect(products).toBeTruthy('No products found');
      expect(products.name).toBe('Luxury Hammock Swing');

    });
    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toEqual("GET");
    req.flush(ProductData);

  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

