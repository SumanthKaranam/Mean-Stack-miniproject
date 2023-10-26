import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  getProductList(): Observable<any> {
    return this.http.get<any>('http://localhost:2000/api/getProductList');
  }
  //Api calling
  public List = new BehaviorSubject('');
  setList(value: any) {
    this.List.next(value);
  }
  getList(): Observable<any> {
    return this.List.asObservable();
  }
  //for dropdown sorting
  public SortBy = new BehaviorSubject('');
  setSortBy(value: any) {
    this.SortBy.next(value);
  }
  getSortBy(): Observable<any> {
    return this.SortBy.asObservable();
  }
  // boolean categories sorting with dropdown 
  public CategorySortBy = new BehaviorSubject(true);
  setCategorySortBy(value: any) {
    this.CategorySortBy.next(value);
  }
  getCategorySortBy(): Observable<any> {
    return this.CategorySortBy.asObservable();
  }
  //boolean filter by price sorting with dropdown 
  public PriceSortBy = new BehaviorSubject(true);
  setPriceSortBy(value: any) {
    this.PriceSortBy.next(value);
  }
  getPriceSortBy(): Observable<any> {
    return this.PriceSortBy.asObservable();
  }
  //boolean categories sorting with price and dropdown
  public ChangeCatPrice = new BehaviorSubject(true);
  setChangeCatPrice(value: any) {
    this.ChangeCatPrice.next(value);
  }
  getChangeCatPrice(): Observable<any> {
    return this.ChangeCatPrice.asObservable();
  }
  //category filter functionality
  public FilterByCategory = new BehaviorSubject('');
  setFilterByCategory(value: any) {
    this.FilterByCategory.next(value);
  }
  getFilterByCategory(): Observable<any> {
    return this.FilterByCategory.asObservable();
  }
    //result for all functionalities for card 
  //(price)
  public Filter = new BehaviorSubject(null);
  setFilter(value: any) {
    this.Filter.next(value);
  }
  getFilter(): Observable<any> {
    return this.Filter.asObservable();
  }
  public Cart = new BehaviorSubject('');
  setCart(value: any) {
    this.Cart.next(value);
  }
  getCart(): Observable<any> {
    return this.Cart.asObservable();
  }
  //next page
  Data: any;
  getData() {
    return this.Data;
  }
  setData(value: any) {
    return (this.Data = value);
  }
  getCartList(): Observable<any> {
    return this.http.get<any>('http://localhost:2000/api/getCartList');
  }
  postToCart(value: any): Observable<any> {
    return this.http.post<any>('http://localhost:2000/api/addToCart', value);
  }

  public LatestQuantity = new BehaviorSubject(1);
  setLatestQuantity (value: any) {
    this.LatestQuantity .next(value);
  }
  getLatestQuantity (): Observable<any> {
    return this.LatestQuantity .asObservable();
  }
  // public LatestDetails = new BehaviorSubject(null);
  // setLatestDetails (value: any) {
  //   this.LatestDetails .next(value);
  // }
  // getLatestDetails (): Observable<any> {
  //   return this.LatestDetails .asObservable();
  // }
  public CartCount = new BehaviorSubject(null);
  setCartCount (value: any) {
    this.CartCount.next(value);
  }
  getCartCount(): Observable<any> {
    return this.CartCount.asObservable();
  }
}
