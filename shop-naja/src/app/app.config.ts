import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [provideAnimationsAsync(), provideRouter(routes), provideClientHydration(), provideHttpClient(), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient()]
};
