import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { EduSharingApiModule } from 'ngx-edu-sharing-api';
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      EduSharingApiModule.forRoot({ rootUrl: environment.eduSharingApiUrl })
    ),
  ],
}).catch(err => console.error(err));
