import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { DetailPage } from './pages/detail/detail.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'product/:id', component: DetailPage }
];
