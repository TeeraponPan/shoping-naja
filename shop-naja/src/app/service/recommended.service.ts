import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recommended } from '../model/recommended';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {

  constructor(private http:HttpClient) { }

  httpGetRecommended() {
    return this.http.get<Recommended[]>(`https://shop.eco-deals.com/services/api/v1/product/recommended`)
  }
}
