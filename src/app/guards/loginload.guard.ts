import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

export const loginloadGuard: CanMatchFn = (route, segments) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  return loginService.isLoggedIn? true : router.navigate(["/login"]); 
};
