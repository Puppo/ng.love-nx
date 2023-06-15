import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadComponent() {
      return import('@angular.love/products/pages').then(
        (c) => c.ProductsPagesComponent
      );
    },
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent() {
      return import('@angular.love/home/pages').then(
        (c) => c.HomePagesComponent
      );
    },
  },
];
