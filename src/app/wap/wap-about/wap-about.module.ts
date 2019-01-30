import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WapAboutRoutingModule } from './wap-about-routing.module';
import { WapAboutComponent } from './wap-about.component';

@NgModule({
  imports: [
    CommonModule,
    WapAboutRoutingModule
  ],
  declarations: [WapAboutComponent]
})
export class WapAboutModule { }
