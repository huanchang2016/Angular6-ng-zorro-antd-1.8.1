import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountPagePermissionGuard } from './core/guard/account-page-permission.guard';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', loadChildren: './pages/index/index.module#IndexModule' },
  // { path: 'index', loadChildren: './pages/index/index.module#IndexModule' },
  { path: 'web', loadChildren: './pages/web/web.module#WebModule' },
  { path: 'account', loadChildren: './pages/account/account.module#AccountModule',
    canActivate: [AccountPagePermissionGuard]
  },
  /********** wap pages ***********/
  { path: 'wap', loadChildren: './wap/wap.module#WapModule' },
  /********** wap pages ***********/
  { path: 'error', loadChildren: './pages/error-page/error-page.module#ErrorPageModule' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }