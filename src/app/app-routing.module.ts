import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountPagePermissionGuard } from './core/guard/account-page-permission.guard';

const routes: Routes = [
  { path: '', loadChildren: './pages/index/index.module#IndexModule' },
  { path: 'index', loadChildren: './pages/index/index.module#IndexModule' },
  { path: 'web', loadChildren: './pages/web/web.module#WebModule' },
  { path: 'account', loadChildren: './pages/account/account.module#AccountModule',
    canActivate: [AccountPagePermissionGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }