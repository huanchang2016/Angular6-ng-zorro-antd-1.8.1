import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WapAccountRoutingModule } from './wap-account-routing.module';
import { WapAccountComponent } from './wap-account.component';

@NgModule({
  imports: [
    CommonModule,
    WapAccountRoutingModule
  ],
  declarations: [WapAccountComponent]
})
export class WapAccountModule { }
