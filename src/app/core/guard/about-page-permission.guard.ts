import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AboutPagePermissionGuard implements CanActivate {
  constructor(
    private httpRequest: HttpRequestService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.httpRequest.permission.aboutPage) {
      return true;
    }
    return false;
    // this.httpRequest.navTo('/'); // 如果路由守卫不能验证通过， 跳转到首页；
  }
}
