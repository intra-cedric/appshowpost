import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayAllBooksComponent } from './features/books-list/display-all-books/display-all-books.component';
import { DisplayDetailsBookComponent } from './features/books-list/display-details-book/display-details-book.component';

const appRoutes: Routes = [
  { path: '', component: DisplayAllBooksComponent  } ,
  { path: 'book/:bookId', component: DisplayDetailsBookComponent  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes /*,{ enableTracing: true }, */) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
