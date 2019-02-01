import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WapAboutComponent } from './wap-about.component';

const routes: Routes = [
  { path: '', component: WapAboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapAboutRoutingModule { }
