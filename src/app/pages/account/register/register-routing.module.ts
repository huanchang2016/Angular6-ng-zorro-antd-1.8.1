import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: UserRegisterComponent },
      { path: 'company', component: CompanyRegisterComponent },
      { path: '**', redirectTo: 'user', pathMatch: 'full' }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
