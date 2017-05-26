import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  books:Array<Book>;

  constructor(private bookServ:BookService,
              private router:Router) { }

  ngOnInit() {
    this.books = this.bookServ.getBooks();
  }

  onBoookSelect(book:Book){
          console.log(book.id);
        this.router.navigate(['/book-details', book.id]);
  }




}
