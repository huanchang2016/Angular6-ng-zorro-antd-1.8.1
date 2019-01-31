import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { WapListRoutingModule } from './wap-list-routing.module';
import { WapListComponent } from './wap-list.component';

@NgModule({
  imports: [
    SharedModule,
    WapListRoutingModule
  ],
  declarations: [WapListComponent]
})
export class WapListModule { }
