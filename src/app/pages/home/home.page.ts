import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ShortTitlePipe } from '../../pipes/short-title.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RouterModule, Router } from '@angular/router';

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

  constructor(private api: ApiService, private router: Router) {
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
    // passar parâmetro por rota -> requisito extra (ex. /product/3)
    this.router.navigate(['/product', id]);
  }
}
