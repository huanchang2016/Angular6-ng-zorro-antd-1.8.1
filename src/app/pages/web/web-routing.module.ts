import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { AboutPagePermissionGuard } from 'src/app/core/guard/about-page-permission.guard';

const routes: Routes = [
  { path: '', component: WebComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', loadChildren: './about/about.module#AboutModule',
        canActivate: [AboutPagePermissionGuard]
      },
      { path: '**', redirectTo: 'about', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
