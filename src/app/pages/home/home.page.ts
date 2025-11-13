/* home.page.ts - alterado para suporte a favoritos e uso da directive */
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ShortTitlePipe } from '../../pipes/short-title.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RouterModule, Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, ShortTitlePipe, HighlightDirective, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {
  products: any[] = [];
  loading = true;
  error = '';

  constructor(
    private api: ApiService,
    private router: Router,
    private favoritesService: FavoritesService
  ) {
    this.load();
  }

  load() {
    this.loading = true;
    this.api.getProducts().subscribe({
      next: (res: any[]) => { this.products = res; this.loading = false; },
      error: (err) => { this.error = 'Erro ao buscar produtos'; this.loading = false; }
    });
  }

  openDetail(id: number) {
    this.router.navigate(['/product', id]);
  }

  openFavorites() {
    this.router.navigate(['/favorites']);
  }

  // getter pra quantidade de favoritos
  get favoritesCount(): number {
    return this.favoritesService.getFavorites().length;
  }


  //check de evento
  toggleFavorite(product: any, ev?: Event) {
    if (ev) ev.stopPropagation();
    this.favoritesService.toggleFavorite(product);
  }
  isFavorite(productId: number) {
    return this.favoritesService.isFavorite(productId);
  }
}
