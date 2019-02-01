import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { WapRegisterRoutingModule } from './wap-register-routing.module';
import { WapRegisterComponent } from './wap-register.component';
import { WapUserRegisterComponent } from './wap-user-register/wap-user-register.component';
import { WapCompanyRegisterComponent } from './wap-company-register/wap-company-register.component';

@NgModule({
  imports: [
    SharedModule,
    WapRegisterRoutingModule
  ],
  declarations: [WapRegisterComponent, WapUserRegisterComponent, WapCompanyRegisterComponent]
})
export class WapRegisterModule { }
