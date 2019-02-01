import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WapWebRoutingModule } from './wap-web-routing.module';
import { WapWebComponent } from './wap-web.component';

@NgModule({
  imports: [
    CommonModule,
    WapWebRoutingModule
  ],
  declarations: [WapWebComponent]
})
export class WapWebModule { }
