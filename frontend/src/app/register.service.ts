import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL="http://localhost:8088/registration";
  
  constructor(private httpClient:HttpClient) { }

  registerUser(user:User):Observable<Object>{
    console.log(user);
    return this.httpClient.post(`${this.baseURL}/register`,user,{responseType: 'text'});
  }
  
  getRoles() : any {
    return this.httpClient.get(`${this.baseURL}/roles`);
  }

  getUsers(): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/users`);
  }


  sendOtp(email: string) {
    const params = new HttpParams().set('email', email);     // Create an HttpParams object to include the 'email' parameter in the URL.

    return this.httpClient.post(`${this.baseURL}/send-otp`, null, { params });    // Make the POST request with the 'email' parameter as a query parameter.

  }


}
