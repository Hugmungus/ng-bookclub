import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookComponent, BooksComponent, SearchComponent]
})
export class BookModule { }
