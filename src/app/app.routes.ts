import { Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ReferenceContentComponent } from './reference-content/reference-content.component';

export const routes: Routes = [
  {
    path: 'collection-list',
    component: CardListComponent,
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'collection-list/content-list',
    component: ContentListComponent,
    data: { breadcrumb: 'Content List' },
  },
  {
    path: 'collection-list/content-list/content',
    component: ReferenceContentComponent,
    data: { breadcrumb: 'Content' },
  },
  {
    path: '**',
    redirectTo: 'collection-list',
  },
];
