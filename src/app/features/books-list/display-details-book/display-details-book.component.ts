import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/core/_services/books.service';
import { Books } from '../../../../shared/_models/books.model';
import { Input } from '@angular/core';
import { Observable} from "rxjs";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-details-book',
  templateUrl: './display-details-book.component.html'
})
export class DisplayDetailsBookComponent implements OnInit {

  @Input() bookselected : Books[] = []; 
  @Output() modifyBook = new EventEmitter();
  
  private _id: string;

  public editStatus:boolean = false;
  public createStatus:boolean = false;
  public statusmode : string;
  bookDetail;

  constructor(  private _route: ActivatedRoute, private _booksService: BooksService ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._id = (params.get('bookId'));
    });
  };

  public showBookDetail (id : string) {
    this._getOneBook(id);
  };

  public createBook() {
      this.createStatus = true;
      this.statusmode = 'create';
  };

  public editBook(){
      this.editStatus = true;
      this.statusmode = 'edit';
  };

  public onCreatedBook (event:any) {
      alert("Creation");
      this.createStatus = false;
  };

  public onModifiedBook(event:any) {
    this.bookDetail.title = event.title;
    this.bookDetail.body = event.body;
    this.editStatus = false;
    alert("Modification");
    //this._updateOneBook(event.id, event);
   // this.emitParentModified();
    // console.log(event.id);
  };

  public emitParentModified() {
    this.modifyBook.emit();
  };

  private _updateOneBook(_id:string, data:any) {
  //  this.bookDetail = this._booksService.upDateOneBook(_id, JSON.stringify(data));
  };

  private _getOneBook ( bookid : string) {
    this.bookDetail = this._booksService.getOneBook(bookid).subscribe((bookSelectedDetail : Books[])=>{
      this.bookDetail = bookSelectedDetail;
    });
  };



}
