import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingMall } from '../model/shopping-mall';

@Injectable({
  providedIn: 'root'
})
export class ShoppingMallService {

  constructor(private http:HttpClient) { }

  httpGetShoppingMall() {
    return this.http.get<ShoppingMall[]>(`https://shop.eco-deals.com/services/api/v1/product/shopping-mall`)
  }
}
