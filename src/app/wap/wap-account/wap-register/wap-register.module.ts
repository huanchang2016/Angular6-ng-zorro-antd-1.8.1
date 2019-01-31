import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WapRegisterRoutingModule } from './wap-register-routing.module';
import { WapRegisterComponent } from './wap-register.component';
import { WapUserRegisterComponent } from './wap-user-register/wap-user-register.component';
import { WapCompanyRegisterComponent } from './wap-company-register/wap-company-register.component';

@NgModule({
  imports: [
    CommonModule,
    WapRegisterRoutingModule
  ],
  declarations: [WapRegisterComponent, WapUserRegisterComponent, WapCompanyRegisterComponent]
})
export class WapRegisterModule { }
