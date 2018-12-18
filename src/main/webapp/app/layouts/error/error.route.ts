import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'ZipMynt'
    }
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'ZipMynt',
      error403: true
    }
  }
];
