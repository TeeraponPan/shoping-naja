import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  httpGetProfile(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    console.log(headers)
    return this.http.get<Profile[]>(`https://shop.eco-deals.com/services/api/v1/profile`, { headers: headers })
  }

  httpPatchProfile(token: string, profile: Profile) {
    console.log("body",profile)
    console.log("token",token)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.patch<Profile[]>(`https://shop.eco-deals.com/services/api/v1/profile`,{ first_name: profile.first_name,
      last_name: profile.last_name,
      mobile: profile.mobile,
      sex: profile.sex
    }, { headers: headers })
  }
}
