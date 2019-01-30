import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WapRoutingModule } from './wap-routing.module';
import { WapComponent } from './wap.component';

@NgModule({
  imports: [
    CommonModule,
    WapRoutingModule
  ],
  declarations: [WapComponent]
})
export class WapModule { }
