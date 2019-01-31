import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WapLoginRoutingModule } from './wap-login-routing.module';
import { WapLoginComponent } from './wap-login.component';

@NgModule({
  imports: [
    CommonModule,
    WapLoginRoutingModule
  ],
  declarations: [WapLoginComponent]
})
export class WapLoginModule { }
