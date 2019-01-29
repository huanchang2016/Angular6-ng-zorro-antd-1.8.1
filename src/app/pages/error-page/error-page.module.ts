import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
  imports: [
    SharedModule,
    ErrorPageRoutingModule
  ],
  declarations: [ErrorPageComponent]
})
export class ErrorPageModule { }
