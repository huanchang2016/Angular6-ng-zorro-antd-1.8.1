import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WapListComponent } from './wap-list.component';

const routes: Routes = [
  { path: '', component: WapListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapListRoutingModule { }
