import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
  
  userList:any;


  constructor(private regService: RegisterService){}
  ngOnInit(): void {
    this.getAllUser();
  }

  // getAllBook() {
  //   this.bokService.getAllBook().subscribe(
  //     (res) => {
  //       this.bookList = res; //new
  //     },
  //     (err) => {
  //       console.log('error while fetching data.');
  //     }
  //   );
  // }

  getAllUser() {
    this.regService.getUsers().subscribe(
      (res) => {
     
        console.log(res);
        this.userList = res; //new
      },
      (err) => {
        console.log('error while fetching data.');
      
      }
    );
  }

  
}
