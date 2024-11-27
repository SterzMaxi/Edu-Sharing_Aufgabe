// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { EduSharingApiModule } from 'ngx-edu-sharing-api';
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      EduSharingApiModule.forRoot({ rootUrl: environment.eduSharingApiUrl })
    ),
  ],
}).catch(err => console.error(err));
