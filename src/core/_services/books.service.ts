import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../../shared/_models/books.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor( private _httpClient : HttpClient ) { }

  public getAllBooks() : Observable<Books[]>  {
     return this._httpClient.get<Books[]>('https://jsonplaceholder.typicode.com/posts'); 
  };

  public getOneBook(id: string) : Observable<Books[]>  {
    return this._httpClient.get<Books[]>('https://jsonplaceholder.typicode.com/posts?id='+id) 
  };

  public upDateOneBook(id: string, data:any) : Observable<Books[]>  {
    return this._httpClient.put<Books[]>('https://jsonplaceholder.typicode.com/posts/'+id, data)
  };


  
}
