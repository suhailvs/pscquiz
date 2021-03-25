import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogoutComponent} from './shared/login/logout.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout.module').then((m) => m.LayoutModule),
    canActivate: [AuthGuard] 
  },
  { path: 'login', loadChildren: () =>
      import('./shared/login/login.module').then((m) => m.LoginModule),
  },
  { path: 'logout', component: LogoutComponent },
  { path: 'errors', loadChildren: () =>
      import('./shared/errorpages/errorpages.module').then((m) => m.ErrorPagesModule),
  },
  { path: '**', redirectTo: 'errors'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


