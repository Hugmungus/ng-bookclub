import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookComponent } from '../book/book.component';
import { SearchComponent } from '../search/search.component';
import { BooksComponent } from '../books/books.component';
import { BOOK } from '../../constants';

@NgModule({
  imports: [RouterModule.forChild([
    { path: BOOK, component: BooksComponent },
    { path: BOOK + '/:bookId', component: BookComponent },
    { path: BOOK + '/search', component: SearchComponent },
  ])],
  exports: [RouterModule]
})
export class BookRoutingModule {}
