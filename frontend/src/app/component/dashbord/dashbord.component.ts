import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
//decorator
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent implements OnInit {
  bokDetail!: FormGroup;
  bokObj: Book = new Book();
  // bokList: Book[] = [];
  bookList: any;
  book: any;
  isEditable: boolean = true;
  index: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private bokService: BookService
  ) {}

  ngOnInit(): void {
    this.getAllBook();

    this.bokDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      author: [''],
      price: [''],
      available: [''],
    });

    console.log(this.bokDetail);
  }

  addBook() {
    console.log(this.bokDetail);

    this.bokObj.id = this.bokDetail.value.id;
    this.bokObj.name = this.bokDetail.value.name;
    this.bokObj.price = this.bokDetail.value.price;
    this.bokObj.author = this.bokDetail.value.author;
    this.bokObj.available = true;

    this.bokService.addBook(this.bokObj).subscribe(
      (res) => {
        console.log(this.bokObj);
        this.getAllBook();
        alert('Add Successfully');
        this.getAllBook();
        this.bokDetail.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAllBook() {
    this.bokService.getAllBook().subscribe(
      (res) => {
        this.bookList = res; //new
      },
      (err) => {
        console.log('error while fetching data.');
      }
    );
  }

  updateedit(data: any) {
    console.log('Inside edit');
    console.log(data);
    this.isEditable = true;
    this.bokDetail.controls['id'].patchValue(data.id);
    this.bokDetail.controls['name'].setValue(data.name);
    this.bokDetail.controls['author'].setValue(data.author);
    this.bokDetail.controls['price'].setValue(data.price);
    this.bokDetail.controls['available'].setValue(data.available);
  }

  update(bokObj: any) {
    console.log(bokObj);
    this.bokObj.id = this.bokDetail.value.id;
    this.bokObj.name = this.bokDetail.value.name;
    this.bokObj.price = this.bokDetail.value.price;
    this.bokObj.author = this.bokDetail.value.author;
    this.bokService.updateBook(bokObj).subscribe(
      (response) => {
        console.log(response);
        alert('Updated Successfully');
        this.getAllBook();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteBook(id: number) {
    this.bokService.deleteBooks(id).subscribe(
      (res) => {
        console.log(res);
        alert('delete sucessfully');
        this.getAllBook();
        this.bokDetail.reset();
      },
      (err) => {
        console.log('delete unsucessfully');
        console.log(err);
      }
    );
  }
}
