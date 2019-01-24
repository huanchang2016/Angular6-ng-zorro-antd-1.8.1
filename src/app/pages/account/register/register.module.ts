import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';

@NgModule({
  imports: [
    SharedModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent, UserRegisterComponent, CompanyRegisterComponent]
})
export class RegisterModule { }
