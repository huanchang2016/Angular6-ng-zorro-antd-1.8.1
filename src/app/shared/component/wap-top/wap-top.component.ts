import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/core/service/http-request.service';

@Component({
  selector: 'app-wap-top',
  templateUrl: './wap-top.component.html',
  styleUrls: ['./wap-top.component.scss']
})
export class WapTopComponent implements OnInit {
  public isLogin:boolean = this.httpRequest.isLogin;
  public routeArr:Array<any> = this.httpRequest.routerArray;
  menuVisible:boolean = false; // 控制 侧边 导航栏
  titleTemplate:string = `<div class="clear draw-title">
      <span class="danger fl">登录？</span>
      <span class="success fr">注册？</span>
    </div>
  `;
  constructor(private httpRequest: HttpRequestService) {
    this.httpRequest.routerArray.map((item) => {
      // item.url = item.url.indexOf('wap') === -1 ? '/wap' + item.url : 
      if(item.url.indexOf("wap") === -1) {
        if(item.url.indexOf("web") !== -1) {
          item.url = item.url.replace('web', 'wap');
        }else{
          item.url = '/wap' + item.url;
        }
      }
    })
    console.log(this.httpRequest.routerArray);
  }

  ngOnInit() {
  }

  changeDrawer = () =>  {
    this.menuVisible = !this.menuVisible;
  }

}
