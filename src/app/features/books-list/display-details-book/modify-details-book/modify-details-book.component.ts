import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Books } from '../../../../../shared/_models/books.model';

@Component({
  selector: 'app-modify-details-book',
  templateUrl: './modify-details-book.component.html'
})
export class ModifyDetailsBookComponent implements OnInit {

  @Input() booktomodify: Books ;
  @Input() mode: string;
  @Output() isBookModified = new EventEmitter<any>();
  @Output() isBookCreated = new EventEmitter<any>();

  newBookDetail: Books;
  
  submitted = false;

  constructor() { }

  ngOnInit() {
    if (this.booktomodify) {
      alert(this.mode);
        if (this.mode === "create") {
          this.newBookDetail = new Books (999999999,'999999999', '', '');
        }else{
          this.newBookDetail = new Books (this.booktomodify[0].userId, this.booktomodify[0].id, this.booktomodify[0].title, this.booktomodify[0].body)
       }
    }
  }

  alertCreateBook (data: any) {
    this.isBookCreated.emit(this.booktomodify[0]);
  }

  alertModifiedBook( data: any){
    this.booktomodify[0].title = data.title;
    this.booktomodify[0].body = data.body;
    this.isBookModified.emit(this.booktomodify[0]);
  }
  onSubmit() { 
    
    (this.mode === "create") ? this.alertCreateBook(this.newBookDetail) : this.alertModifiedBook(this.newBookDetail);
   // let message = 
   // prompt("Vous venez de mettre à jour le livre avec les informations suivantes : <br>Titre " + this.newBookDetail.title + "<br> Body :" + this.newBookDetail.body );
    this.submitted = true; 
  }

}
