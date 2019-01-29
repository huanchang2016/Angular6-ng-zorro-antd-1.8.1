import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WapIndexComponent } from './wap-index.component';

const routes: Routes = [
  { path: '', component: WapIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WapIndexRoutingModule { }
