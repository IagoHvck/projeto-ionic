import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './detail.page.html',
  styleUrls: ['../detail/detail.page.css']
})
export class DetailPage {
  product: any = null;
  loading = true;

  constructor(private route: ActivatedRoute, private api: ApiService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.api.getProduct(id).subscribe({
        next: p => { this.product = p; this.loading = false; },
        error: () => { this.loading = false; }
      });
    } else {
      this.loading = false;
    }
  }
}
