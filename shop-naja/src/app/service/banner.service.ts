import { Injectable } from '@angular/core';
import { Banner } from '../model/banner';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http:HttpClient) { }

  httpGetBanner() {
    return this.http.get<Banner[]>(`https://shop.eco-deals.com/services/api/v1/product/banner`)
  }
}
