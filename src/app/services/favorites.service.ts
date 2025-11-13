import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private storageKey = 'dgg:favorites';

    getFavorites(): any[] {
      const raw = localStorage.getItem(this.storageKey) || '[]';
      try { return JSON.parse(raw); } catch { return []; }
    }

    addFavorite(product: any) {
      const list = this.getFavorites();
      if (!list.find((p: any) => p.id === product.id)) {
        list.push(product);
        localStorage.setItem(this.storageKey, JSON.stringify(list));
      }
    }
    removeFavorite(productId: number) {
      const next = this.getFavorites().filter((p: any) => p.id !== productId);
      localStorage.setItem(this.storageKey, JSON.stringify(next));
    }

    toggleFavorite(product: any) {
      const list = this.getFavorites();
      const exists = list.find((p: any) => p.id === product.id);
      if (exists) this.removeFavorite(product.id);
      else this.addFavorite(product);
    }
    isFavorite(productId: number) {
      return !!this.getFavorites().find((p: any) => p.id === productId);
    }
    clearAll() {
      localStorage.removeItem(this.storageKey);
    }
}
