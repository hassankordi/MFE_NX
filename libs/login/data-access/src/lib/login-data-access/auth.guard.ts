import { inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CanActivateFn } from '@angular/router';
// @Injectable({
//     providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//     constructor( ) {}
   
//     canActivate(
//         next: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot
//     ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//         const _authService = inject(AuthService);
//         const _Router = inject(Router);
//         const isAuthenticated = _authService.checkAuthentication();
//         return _authService.isAuthenticated.pipe(
//             map((isAuthenticated) => {
//               if (!isAuthenticated) {
//                 _Router.navigate(['/login']);
//                 return false;
//               }
//               return true;
//             })
//           );
//     }
// }
export const AuthGuard: CanActivateFn = (route, state) => {
    const _authService = inject(AuthService);
    const _Router = inject(Router);
    _authService.checkAuthentication();
    return _authService.isAuthenticated.pipe(
        map((isAuthenticated) => {
          if (!isAuthenticated) {
            _Router.navigate(['/login']);
            return false;
          }
          return true;
        })
      );
  };
  