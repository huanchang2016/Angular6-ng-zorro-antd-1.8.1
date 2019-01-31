import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WapRegisterComponent } from './wap-register.component';
import { WapUserRegisterComponent } from './wap-user-register/wap-user-register.component';
import { WapCompanyRegisterComponent } from './wap-company-register/wap-company-register.component';

const routes: Routes = [
  { path: '', component: WapRegisterComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: WapUserRegisterComponent },
      { path: 'company', component: WapCompanyRegisterComponent },
      { path: '**', redirectTo: 'user', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapRegisterRoutingModule { }
