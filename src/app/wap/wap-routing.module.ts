import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './wap-index/wap-index.module#WapIndexModule' },
  { path: 'list', loadChildren: './wap-list/wap-list.module#WapListModule' },
  { path: 'about', loadChildren: './wap-about/wap-about.module#WapAboutModule' },
  { path: 'account', loadChildren: './wap-account/wap-account.module#WapAccountModule' },
  { path: '**', redirectTo: '/error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapRoutingModule { }
