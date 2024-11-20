import { Routes } from '@angular/router';
import { loadRemoteModule } from "@angular-architects/native-federation";

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
    path: 'register',
    loadComponent: () =>
      import('./pages/register/ui/register/register.component')
        .then((e) => e.RegisterComponent)
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/ui/cart/cart.component')
        .then((e) => e.CartComponent)
  },

  {
    path: 'auth',
    loadComponent: () =>
      loadRemoteModule('auth', './Component').then((c)=>c.AppComponent)
  }
];
