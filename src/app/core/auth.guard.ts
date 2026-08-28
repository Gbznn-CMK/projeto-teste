import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthFacade } from './facade/auth.facade';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);
  if (authFacade.estaLogado()) {
    return true;
  }
  return router.createUrlTree(['/login']);
};