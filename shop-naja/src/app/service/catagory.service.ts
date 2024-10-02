import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catagory } from '../model/catagory';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {

  constructor(private http:HttpClient) { }

  httpGetCatagory() {
    return this.http.get<Catagory[]>(`https://shop.eco-deals.com/services/api/v1/product/category`)
  }
}
