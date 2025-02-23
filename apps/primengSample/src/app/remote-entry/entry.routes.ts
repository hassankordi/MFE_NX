import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { PrimeHomeComponent } from '../prime-home/prime-home.component';

export const remoteRoutes: Route[] = [
  { path: '', redirectTo: 'Prime-Home', pathMatch: 'full' },
  { path: 'Prime-Home', component: PrimeHomeComponent },
  { path: 'PrimeEntry', component: RemoteEntryComponent },
];
