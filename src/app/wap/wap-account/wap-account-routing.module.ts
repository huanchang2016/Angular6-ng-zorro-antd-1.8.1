import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WapAccountComponent } from './wap-account.component';

const routes: Routes = [
  { path: '', component: WapAccountComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadChildren: './wap-login/wap-login.module#WapLoginModule' },
      { path: 'register', loadChildren: './wap-register/wap-register.module#WapRegisterModule' },
      { path: 'forgotPassword', loadChildren: './wap-forgot-password/wap-forgot-password.module#WapForgotPasswordModule' },
      { path: '**', redirectTo: '/error', pathMatch: 'full' }
    ]
  },
  // { path: '', redirectTo: 'login1', pathMatch: 'full' },
  //     { path: 'login1', loadChildren: './wap-login/wap-login.module#WapLoginModule' },
  //     { path: 'register', loadChildren: './wap-register/wap-register.module#WapRegisterModule' },
  //     { path: 'forgotPassword', loadChildren: './wap-forgot-password/wap-forgot-password.module#WapForgotPasswordModule' },
  //     { path: '**', redirectTo: '/error', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapAccountRoutingModule { }
