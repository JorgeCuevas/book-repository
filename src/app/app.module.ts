import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// services import here
import {BookService} from './services/book.service';
// router class
import {router} from './route'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    CatalogComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  // services here
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
