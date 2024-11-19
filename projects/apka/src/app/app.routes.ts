import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'items',
    loadComponent: () =>
      import('./pages/items/ui/items/items.component').then(
        (c) => c.ItemsComponent
      ),
  },
  {
    path: 'workers',
    loadComponent: () =>
      import('./pages/workers/ui/workers/workers.component')
        .then((e) => e.WorkersComponent)
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/ui/cart/cart.component')
        .then((e) => e.CartComponent)
  },
];
