import { Injectable } from '@angular/core';
import {Book} from '../interfaces/book';


@Injectable()
export class BookService {
  books: Array<Book> = [
    {
      id: 1239849,
      title: 'Beggining Java EE 7',
      author: 'Antonio Goncalves',
      description: 'This book show a easy way to develop webapps with Java EE',
      img:"https://images-na.ssl-images-amazon.com/images/I/51tHaEiZ1ML._SX258_BO1,204,203,200_.jpg",
      likes:334,
      unlikes:43,
      numOfPages:456,
      chapters:13,
      level:"Bigginer",
       price:30.5,
       pubYear:"2014",
       tags:['Java']
    },
    {
      id: 6949849,
      title: 'Design Patterns with Java',
      author: 'Elisabeth Robson',
      description: 'At any given moment, someone struggles with the same software design problems you have. And, chances are, someone else has already solved your problem. This edition of Head First Design Patterns—now updated for Java 8—shows you the tried-and-true, road-tested patterns used by developers...',
      img:"http://cdn.journaldev.com/wp-content/uploads/2015/03/Head-First-Design-Patterns-Book-390x450.jpg",
      likes:4,
      unlikes:43,
      numOfPages:456,
      chapters:13,
      level:"Bigginer",
       price:30.5,
       pubYear:"2014",
       tags:['Java', 'Software Devlop']
    },
    {
      id: 4849849,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way. Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. ",
      img:"http://www.informit.com/ShowCover.aspx?isbn=0132350882",
      likes:33454,
      unlikes:3,
      numOfPages:456,
      chapters:13,
      level:"Bigginer",
       price:30.5,
       pubYear:"2014",
       tags:['Java']
    }
  ]

  constructor() { }

  getBooks() {
    return this.books;
  }

  getBookById(id:number):Book{
    return this.books.find((book) => book.id == id);
  }
}
