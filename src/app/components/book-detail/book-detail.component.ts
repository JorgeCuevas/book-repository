import { Component, OnInit } from '@angular/core';
import {RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit {

  constructor(private activeRoute:RouterLinkActive) { }

  ngOnInit() {

  }

}
