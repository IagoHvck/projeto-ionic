import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.css']
})
export class DetailPage {
  product: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private favoritesService: FavoritesService
  ) {
    this.loadProductFromRoute();
  }

  // puxa o id do produto vindo da route e filtra pela api
  private loadProductFromRoute() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.product = null;
      this.loading = false;
      return;
    }
    this.loading = true;
    this.api.getProduct(id).subscribe({
      next: (produto) => {
        this.product = produto;
        this.loading = false;
      },

      error: () => {
        this.product = null;
        this.loading = false;
      }
    });
  }


  // verifica se o produto ta favoritado
  isFavorite(productId?: number): boolean {
    const id = productId ?? this.product?.id;
    if (!id) return false;
    return this.favoritesService.isFavorite(id);
  }

  // alterna favorito (adiciona/remove)
  toggleFavorite(product?: any) {
    const current = product ?? this.product;
    if (!current) return;
    this.favoritesService.toggleFavorite(current);
  }
}