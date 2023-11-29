import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Borrow } from '../borrow';
import { BorrowService } from '../borrow-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-borro-book',
  templateUrl: './borro-book.component.html',
  styleUrls: ['./borro-book.component.css'],
})
export class BorroBookComponent {
  book: Book = new Book();
  borrow: Borrow = new Borrow();
  booksList: any;
  returnService: any;
  // isAvailable: boolean | undefined;

  constructor(
    private booksService: BookService,
    private borrowService: BorrowService,
    private http: HttpClient
  ) {
    
  }

  ngOnInit(): void {
    this.getAllBook();
  }

  isAvailable(bookId: any){
    this.borrowService.getBook(bookId).subscribe((res) => {
      this.isAvailable = res.available;
      console.log("this.isAvailable"+this.isAvailable);
      return this.isAvailable;
    });
  }
  available() {
    this.booksService.getAllBook().subscribe(
      (res) => {
        this.booksList = res; //new
      },
      (err) => {
        console.log('error while fetching data.');
      }
    );
  }

  getAllBook() {
    this.booksService.getAllBook().subscribe(
      (res) => {
        this.booksList = res; //new
        console.log(this.booksList);
      },
      (err) => {
        console.log('error while fetching data.');
      }
    );
  }

  show = false;
  hideData() {
    this.show = true;
  }

  borrowBook(bookId: any) {
    console.log(bookId);
    this.borrowService.borrowBook(bookId).subscribe(
      (res: any) => {
        this.booksList = res;
        console.log(this.booksList);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  returnBook(bookId: any) {
    this.borrowService.returnBook(bookId).subscribe(
      (res: any) => {
        this.booksList = res;
        console.log(this.booksList);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
