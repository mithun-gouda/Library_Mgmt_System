import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  //private baseUrl = 'your-api-url'; 
  private baseurl="http://localhost:8088";
  constructor(private http: HttpClient) { }

  sendOtp(email: string) {
    const data = { email };
    return this.http.post(`${this.baseurl}/send-otp`, data);
  }
  
  // verifyOtp(enteredOtp: string, email: string) {
  //   return this.http.post(`${this.baseurl}/verify-otp?enteredOtp=${enteredOtp}&email=${email}`, null);
  // }
}
