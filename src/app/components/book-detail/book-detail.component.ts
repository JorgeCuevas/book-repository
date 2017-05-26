import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Book} from '../../interfaces/book';
import {BookService} from '../../services/book.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit {

  id:number;
  selectedBook:Book;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookServ:BookService) { }

  ngOnInit() {
      this.route.params
      .subscribe((param) =>  this.selectedBook = this.bookServ.getBookById(param['id']));
        

  }

}
