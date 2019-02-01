import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { WapAboutRoutingModule } from './wap-about-routing.module';
import { WapAboutComponent } from './wap-about.component';

@NgModule({
  imports: [
    SharedModule,
    WapAboutRoutingModule
  ],
  declarations: [WapAboutComponent]
})
export class WapAboutModule { }
