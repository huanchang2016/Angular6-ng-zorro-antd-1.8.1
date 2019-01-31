import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { WapAccountRoutingModule } from './wap-account-routing.module';
import { WapAccountComponent } from './wap-account.component';

@NgModule({
  imports: [
    SharedModule,
    WapAccountRoutingModule
  ],
  declarations: [WapAccountComponent]
})
export class WapAccountModule { }
