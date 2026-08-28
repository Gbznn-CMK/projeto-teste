import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { M } from '@angular/cdk/keycodes';
import { adminGuard } from './core/admin.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home/home').then((m) => m.Home),
  },
  {
    path: '',
    loadComponent: () => import('./features/home/home/home').then((m) => m.Home),
  },

  {
    path: 'produtos',
    loadComponent: () =>
      import ('./features/produtos/lista-produtos/lista-produtos').then((m) => m.ListaProdutos)
  },
  {
    path: 'carrinho',
    canActivate: [authGuard],
    loadComponent: () => import('./features/carrinho/carrinho/carrinho').then((m) => m.Carrinho),
  },
  {
    path: 'checkout',
    canActivate: [authGuard],
    loadComponent: () => import('./features/checkout/checkout').then((m) => m.Checkout),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then((m) => m.Login),
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: ()=> import ('./features/admin/admin/admin').then((m) => m.Admin),

  },
  {
    path: '**',
    redirectTo: '',
  },
];
