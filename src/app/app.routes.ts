import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { DetailPage } from './pages/detail/detail.page';
import { FavoritesPage } from './pages/favorites/favorites.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'product/:id', component: DetailPage },
  { path: 'favorites', component: FavoritesPage },
  { path: '**', redirectTo: '' }
];
