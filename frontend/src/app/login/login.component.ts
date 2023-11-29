import { Component } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';
import { FormControl,NgModel } from '@angular/forms';
import { Text } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 // user:User=new User();
  constructor(private userservice:LoginuserService,private router : Router){}
  
  loginData = {
  username:'',
  password:''
  };
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  ngOnInit():void{
  }
  userlogin()
  {
  console.log('Login data',this.loginData);
  this.userservice.loginuser(this.loginData).subscribe((res:any)=>{
  console.log(res,"+++data");
  if(res.role===1){
    this.router.navigate(['/borrow']);
  }
  else if(res.role===2){
    this.router.navigate(['/dashbord']);
  }
 
  alert("Login Successful")
  },
  error=>alert("Please Enter Valid username password")
    );
  }
}
