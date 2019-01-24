import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  imports: [
    SharedModule,
    IndexRoutingModule
  ],
  declarations: [
    IndexComponent,
    HomeComponent
  ]
})
export class IndexModule { }
