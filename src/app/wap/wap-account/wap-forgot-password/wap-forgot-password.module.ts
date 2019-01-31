import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WapForgotPasswordRoutingModule } from './wap-forgot-password-routing.module';
import { WapForgotPasswordComponent } from './wap-forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    WapForgotPasswordRoutingModule
  ],
  declarations: [WapForgotPasswordComponent]
})
export class WapForgotPasswordModule { }
