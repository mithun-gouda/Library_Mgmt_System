import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseurl="http://localhost:8088/registration/login";
  constructor(private httpClient:HttpClient) {}
  
  loginuser(user:User):Observable<any>{
    console.log(user)
    return this.httpClient.post(`${this.baseurl}`,user);

  }
}
