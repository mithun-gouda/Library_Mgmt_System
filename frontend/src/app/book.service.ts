import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import{ Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   add(bokObj:Book){
    throw new Error('Method not implemented');
   }
  private baseUrl="http://localhost:8088/library"

  constructor(private httpClient:HttpClient) { }              

  addBook(book:Book):Observable<Book>{
    return this.httpClient.post<Book>(`${this.baseUrl}`+'/add',book);
  }
                        getAllBook():Observable<Book>{
                          return this.httpClient.get<Book>(`${this.baseUrl}/all`);
                        }
  updateBook(book:Book):Observable<Object>{
    return this.httpClient.put<Book>(`${this.baseUrl}`+'/update/'+book.id, book);
  }
  
  deleteBooks(id:number):Observable<string>{
    const options = { responseType: 'text' as 'json' }; 
    return this.httpClient.delete<string>(`${this.baseUrl}`+'/delete/'+id, options);
  }
}
