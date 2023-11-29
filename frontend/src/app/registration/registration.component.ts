import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { OtpService } from '../otp-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  registeruserData = {
     userid:'',
    username: '',
    password: '',
    mailId: '', 
    otp:'',
    role: 0,
  };
  value: boolean = false;
  value2: boolean = false;
  roles: any = [];
  enteredOtp: string = ''; // Initialize enteredOtp

  constructor(
    private registerService: RegisterService,
    private otpService: OtpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.registerService.getRoles().subscribe((response: any) => {
      this.roles = response;
    });
  }

  emailValidation(): boolean {
      this.value =
      this.registeruserData.username === null ||
      this.registeruserData.username === '';
    return this.value;
  }
  sendOtp() {
    if (
      !this.registeruserData.mailId ||typeof this.registeruserData.mailId !== 'string'
    ) {
      alert('Please provide a valid email address for OTP verification.');
      return;
    }

    // Assuming you have an `otpService` with a `sendOtp` method that takes an email parameter
    this.registerService.sendOtp(this.registeruserData.mailId).subscribe(
      (response) => {
        // Handle a successful OTP sending response
        console.error('Failed to send OTP', Error);
        alert('Failed to send OTP. Please try again.');
      },
      (error) => {
        // Handle errors in OTP sending, e.g., show an error message
        console.log('OTP sent successfully');
        alert(
          'OTP sent sent successfully your email address. Check your inbox.'
        );
      }
    );
  }

  passwordValidation(): boolean {
    this.value2 =
      this.registeruserData.password === null ||
      this.registeruserData.password === '';
    return this.value2;
  }

  userRegister() {

    if (this.emailValidation() || this.passwordValidation()) {
      alert("EmailID or Password is Invalid");
    } else {
      this.registerService.registerUser(this.registeruserData).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/login']);
          alert('Registration Successful');
        },
        (error) => {
          alert('Registration Failed');
        }
      );
    }
  }
}
