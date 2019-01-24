import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';

@NgModule({
  imports: [
    SharedModule,
    WebRoutingModule
  ],
  declarations: [WebComponent]
})
export class WebModule { }
