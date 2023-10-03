import { Route } from '@angular/router';
import { UserSetupComponent } from './user-setup/user-setup.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';

export const appRoutes: Route[] = [
  // { path: 'user-setup', component: UserSetupComponent },
  { path: '', component: UserSetupComponent },
  // { path: 'user-summary', component: UserSummaryComponent },
  {
    path: 'user-summary',
    loadComponent: () =>
      import('./user-summary/user-summary.component').then(
        (x) => x.UserSummaryComponent
      ),
  },
];
