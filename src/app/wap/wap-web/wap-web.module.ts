import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { WapWebRoutingModule } from './wap-web-routing.module';
import { WapWebComponent } from './wap-web.component';

@NgModule({
  imports: [
    SharedModule,
    WapWebRoutingModule
  ],
  declarations: [WapWebComponent]
})
export class WapWebModule { }
