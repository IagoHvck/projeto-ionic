import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ShortTitlePipe } from '../../pipes/short-title.pipe';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, ShortTitlePipe],
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss']
})
export class FavoritesPage {
  favorites: any[] = [];

  constructor(private favService: FavoritesService, private router: Router) {
    this.load();
  }

  load() {
    this.favorites = this.favService.getFavorites() || [];
  }

  openDetail(id: number) {
    this.router.navigate(['/product', id]);
  }

  removeFavorite(id: number) {
    this.favService.removeFavorite(id);
    this.load();
  }

  clearAll() {
    this.favService.clearAll();
    this.load();
  }
}