import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const appRoutes :Routes = [
  {path:'', component: HomeComponent},
  {path:'catalog', component: CatalogComponent},
  {path:'book-details/:id', component: BookDetailComponent},
  {path:'**', component: NotfoundComponent},
];

export const router = RouterModule.forRoot(appRoutes);
