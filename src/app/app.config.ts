import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { NgxSpinnerModule } from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideAnimationsAsync(),
     importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })),
     providePrimeNG({
      ripple:true,
      theme: {
          preset:Aura,
          options:{
            darkModeSelector:"none"
          }
      },
      
  })

  ]
};
