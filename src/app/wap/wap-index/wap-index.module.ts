import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { WapIndexRoutingModule } from './wap-index-routing.module';
import { WapIndexComponent } from './wap-index.component';

@NgModule({
  imports: [
    SharedModule,
    WapIndexRoutingModule
  ],
  declarations: [WapIndexComponent]
})
export class WapIndexModule { }
