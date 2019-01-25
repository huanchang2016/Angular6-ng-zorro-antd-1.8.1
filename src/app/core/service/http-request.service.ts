import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Permission } from 'src/app/data/config';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  public permission:Permission = this.control;

  constructor(
    private http: HttpClient,
    private route: Router,
    private message: NzMessageService
  ) {
    console.log('CoreModule:  HttpRequestService works!');
    console.log(`************************权限配置参数***************************`);
    console.log(this.permission);
    console.log(`************************权限配置参数***************************`);
  }
  
  get control () : Permission{
    return  {
      editBtn: (Math.random() > 0.5) ? true : false,
      deleteBtn: (Math.random() > 0.5) ? true : false,
      aboutPage: true,
      accountEditPage: true
    };
  }

  navTo(url: string) {
    this.route.navigateByUrl(url);
  }

  showMessage (type:string, msg: string, t:number = 2000):void {
    this.message.create(type, msg, { nzDuration: t });
  }
}
