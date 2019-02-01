import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './wap-index/wap-index.module#WapIndexModule' },
  { path: 'web', loadChildren: './wap-web/wap-web.module#WapWebModule' },
  { path: 'account', loadChildren: './wap-account/wap-account.module#WapAccountModule' },
  { path: '**', redirectTo: '/wap', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapRoutingModule { }
