import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WapForgotPasswordComponent } from './wap-forgot-password.component';

const routes: Routes = [
  { path: '', component: WapForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapForgotPasswordRoutingModule { }
