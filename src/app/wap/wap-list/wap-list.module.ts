import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WapListRoutingModule } from './wap-list-routing.module';
import { WapListComponent } from './wap-list.component';

@NgModule({
  imports: [
    CommonModule,
    WapListRoutingModule
  ],
  declarations: [WapListComponent]
})
export class WapListModule { }
