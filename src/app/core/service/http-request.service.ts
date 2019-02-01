import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Permission } from 'src/app/data/config';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  public permission:Permission = this.control; // 权限
  public isWap:boolean = false; // 设备判断
  public isLogin:boolean = false;
  public loginStatusEmitter: EventEmitter<any> = new EventEmitter();
  public routerArray:Array<any> = [
    {
      title: '首页',
      url: '/index',
      icon: 'home'
    },
    {
      title: '列表管理',
      url: '/web/list',
      icon: 'ordered-list'
    },
    {
      title: '关于我们',
      url: '/web/about',
      icon: 'team'
    },
    {
      title: '账号管理',
      url: '/account',
      icon: 'login'
    }
  ];
  




  constructor(
    private http: HttpClient,
    private route: Router,
    private message: NzMessageService
  ) {
    console.log('CoreModule:  HttpRequestService works!');
    console.log(`************************权限配置参数***************************`);
    console.log(this.permission);
    console.log(`************************权限配置参数***************************`);
    this.getUserInfo();// 获取用户登录状态
    // 当用户的登录状态发生改变时，需要改变中间件服务中的登录状态： this.isLogin = !this.isLogin;
    this.loginStatusEmitter.subscribe(()=>{
      this.isLogin = !this.isLogin;
      console.log(this.isLogin);
    })
  }
  // 发起请求判断用户是否处于登录状态
  getUserInfo() {
    let loginNum:number = Math.random();
    console.log(loginNum);
    this.isLogin = loginNum > 0.5 ? true : false;
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
