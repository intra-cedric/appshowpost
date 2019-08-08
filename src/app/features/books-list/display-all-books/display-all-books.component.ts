import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from 'src/core/_services/books.service';
import { Books } from '../../../../shared/_models/books.model'

@Component({
  selector: 'app-display-all-books',
  templateUrl: './display-all-books.component.html'
})
export class DisplayAllBooksComponent implements OnInit {

  private _listBooks : Books[] = [];
  private _productsObservable : Observable<Books[]> ; 

  currentPageTitle : string = "Liste des livres";

  constructor( private _booksService: BooksService) { 
      this._productsObservable = this._booksService.getAllBooks();
  }

  ngOnInit() {
    this._getBooks();
  }

  onModify() {
    window.alert('You will be notified when the book has been totally modified');
  }

  private _getBooks() {
      this._productsObservable.subscribe((booksList : Books[])=>{
        this._listBooks = booksList;
      });
  }

}
