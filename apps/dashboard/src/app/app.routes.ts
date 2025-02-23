import { Route } from '@angular/router';
import {AuthGuard} from '@v-17-2/login-data-access'

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo:"/home",pathMatch:"full"
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(x => x.LoginComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(x => x.HomeComponent),
    canActivate:[AuthGuard]
  },
  {
    path: 'mfe-content',
    loadComponent: () => import('./mfe-content/mfe-content.component').then(x => x.MfeContentComponent),
    canActivate:[AuthGuard]
  },
  {
    path: 'Angular_Material',
    loadChildren: () =>
      import('materialSample/Module').then((m) => m!.RemoteEntryModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'PrimeNG-App',
    loadChildren: () =>
      import('primengSample/Module').then((m) => m!.RemoteEntryModule),
    canActivate:[AuthGuard]
  },
  
];
