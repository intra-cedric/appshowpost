import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// COMPONENT
import { DisplayAllBooksComponent } from './display-all-books/display-all-books.component';
import { DisplayDetailsBookComponent } from './display-details-book/display-details-book.component';
import { ModifyDetailsBookComponent } from './display-details-book/modify-details-book/modify-details-book.component';
import { CreateNewBookComponent } from './display-details-book/create-new-book/create-new-book.component';

@NgModule({
  declarations: [DisplayAllBooksComponent, DisplayDetailsBookComponent, ModifyDetailsBookComponent, CreateNewBookComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule, FormsModule 
  ]
})
export class BooksListModule { }
