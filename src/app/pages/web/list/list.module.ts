import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    SharedModule,
    ListRoutingModule
  ],
  declarations: [ListComponent]
})
export class ListModule { }
