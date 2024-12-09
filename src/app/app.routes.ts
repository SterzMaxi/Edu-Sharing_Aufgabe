import { Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ReferenceContentComponent } from './reference-content/reference-content.component';

export const routes: Routes = [
  {
    path: 'collection-list',
    data: { breadcrumb: 'Sammlungen' },
    children: [
      {
        path: '',
        data: { breadcrumb: null },
        component: CardListComponent,
      },
      {
        path: 'content-list/:id',
        data: { breadcrumb: 'Sammlung' },
        children: [
          {
            path: '',
            data: { breadcrumb: null },
            component: ContentListComponent,
          },
          {
            path: 'content/:referenceId',
            data: { breadcrumb: 'Material' },
            component: ReferenceContentComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'collection-list',
  },
];
