import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WapLoginComponent } from './wap-login.component';

const routes: Routes = [
  { path: '', component: WapLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapLoginRoutingModule { }
