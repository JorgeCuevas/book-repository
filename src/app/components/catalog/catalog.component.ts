import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  books:Array<Book>;

  constructor(private bookServ:BookService) { }

  ngOnInit() {
    this.books = this.bookServ.getBooks();
  }






}
