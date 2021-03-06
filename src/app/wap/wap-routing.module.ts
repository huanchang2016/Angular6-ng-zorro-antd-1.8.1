import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WapComponent } from './wap.component';

const routes: Routes = [
  {
    path: '', component: WapComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', loadChildren: './wap-index/wap-index.module#WapIndexModule' },
      { path: 'web', loadChildren: './wap-web/wap-web.module#WapWebModule' },
      { path: 'account', loadChildren: './wap-account/wap-account.module#WapAccountModule' }
    ]
  },
  { path: '**', redirectTo: '/wap', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapRoutingModule { }
