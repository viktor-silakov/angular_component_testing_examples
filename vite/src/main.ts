import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { renderPage } from '@nitedani/angular-renderer-core/client'

import { AppService } from './app/app.service';
import { importProvidersFrom } from '@angular/core';
import '@angular/compiler';
console.log('🚀', AppComponent)

renderPage({
  page: AppComponent,
  // imports: [AppService],
  providers: [AppService, provideHttpClient()],
});
//
// bootstrapApplication(AppComponent, {
//   providers: [AppService, importProvidersFrom(HttpClientModule)],
// });
