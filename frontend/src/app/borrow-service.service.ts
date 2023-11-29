import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Borrow } from './borrow';
@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  private baseUrl="http://localhost:8088/borrow";
  private apiUrl="http://localhost:8088/library/book";
  constructor(private httpClient : HttpClient) { }

  getBook(bookId:number): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/${bookId}`);
  }

  getBorrowList(): Observable<object[]> {
    return this.httpClient.get<object[]>(`${this.baseUrl}`);
  }

  borrowBook(userId:number): Observable<Object> {
    const api = 'borrowBook/{Id}'
    return this.httpClient.get(`${this.baseUrl}/bookId/`+userId);
  }

  returnBook(userId: number): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl}/returnBooking/`+userId);  }

  getBooksBorrowedByUser(userId: number): Observable<Borrow[]> {
    return this.httpClient.get<Borrow[]>(`${this.baseUrl}/user/${userId}`);
  }

  getBookBorrowHistory(bookId: number): Observable<Borrow[]> {
    return this.httpClient.get<Borrow[]>(`${this.baseUrl}/book/${bookId}`);
  }
}
