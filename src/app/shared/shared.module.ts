import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// import: shared components
import { WebTopComponent } from './component/web-top/web-top.component';
import { WebFooterComponent } from './component/web-footer/web-footer.component';
import { WebNavbarComponent } from './component/web-navbar/web-navbar.component';
import { PermissionPipe } from './pipe/permission.pipe';
import { WapTopComponent } from './component/wap-top/wap-top.component';
import { SharedLoginComponent } from './component/shared-login/shared-login.component';

const SaredComponents = [
    WebTopComponent,
    WebFooterComponent,
    WebNavbarComponent,
    WapTopComponent,
    SharedLoginComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule
  ],
  declarations: [
    ...SaredComponents,
    PermissionPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    ...SaredComponents
  ]
})
export class SharedModule { }
