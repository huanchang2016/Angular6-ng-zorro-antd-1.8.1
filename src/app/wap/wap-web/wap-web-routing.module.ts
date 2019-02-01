import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WapWebComponent } from './wap-web.component';

const routes: Routes = [
  { path: '', component: WapWebComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', loadChildren: './wap-about/wap-about.module#WapAboutModule' },
      { path: 'list', loadChildren: './wap-list/wap-list.module#WapListModule' },
      { path: '**', redirectTo: '/wap', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/wap', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapWebRoutingModule { }
