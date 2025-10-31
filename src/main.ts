import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { IonicModule } from '@ionic/angular';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot(), HttpClientModule),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
