import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { WapRoutingModule } from './wap-routing.module';
import { WapComponent } from './wap.component';

@NgModule({
  imports: [
    SharedModule,
    WapRoutingModule
  ],
  declarations: [WapComponent]
})
export class WapModule { }
