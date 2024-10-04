import { Injectable } from '@angular/core';
import { SignIn } from '../model/sign-in';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  httpGetSignInToken() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    let params = new HttpParams({})
    params.set('email', 'teerapon.ch@vulcan.bluebik.com')
    params.set('password', '010743P')
    const body = {email: 'teerapon.ch@vulcan.bluebik.com', password: '010743P'};
    return this.http.post<SignIn>(`https://shop.eco-deals.com/services/api/v1/sign-in`, body, { headers: headers  , observe: 'body'})
    }
}
