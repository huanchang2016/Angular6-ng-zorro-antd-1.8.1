import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { WapLoginRoutingModule } from './wap-login-routing.module';
import { WapLoginComponent } from './wap-login.component';

@NgModule({
  imports: [
    SharedModule,
    WapLoginRoutingModule
  ],
  declarations: [WapLoginComponent]
})
export class WapLoginModule { }
