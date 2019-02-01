import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from './core/service/http-request.service';
// import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  port = window.location.port;
  public href: string = (window.location.href).split(this.port + '/')[1];
  constructor(
    private httpRequest: HttpRequestService,
    // private router:Router
  ) {
    // this.router.events.subscribe(event => {
    //   if(event instanceof NavigationStart) {
    //     console.log('navigation start:' + window.location.href);
    //   } else if(event instanceof NavigationEnd) {
    //     console.log('navigation End:' + window.location.href);
    //   } else if(event instanceof NavigationCancel) {
    //     console.log('navigation Cancel:' + window.location.href);
    //   } else if(event instanceof NavigationError) {
    //     console.log('navigation Error:' + window.location.href);
    //   } else if(event instanceof RoutesRecognized) {
    //     console.log('navigation Recognized:' + window.location.href);
    //   }
    // });
  }

  ngOnInit() {
    this.browserRedirect();
  }
  // equilpment 
  browserRedirect() {
    let sUserAgent = navigator.userAgent.toLowerCase();
    let bIsIpad = sUserAgent.indexOf("ipad") !== -1;
    let bIsIphoneOs = sUserAgent.indexOf("iphone os") !== -1;
    let bIsMidp = sUserAgent.indexOf("midp") !== -1;
    let bIsUc7 = sUserAgent.indexOf("rv:1.2.3.4") !== -1;
    let bIsUc = sUserAgent.indexOf("ucweb") !== -1;
    let bIsAndroid = sUserAgent.indexOf("android") !== -1;
    let bIsCE = sUserAgent.indexOf("windows ce") !== -1;
    let bIsWM = sUserAgent.indexOf("windows mobile") !== -1;

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      console.log('***********移动端设备访问***********');
      this.httpRequest.isWap = true;
      this.redirectUrl();
    } else {
      let _width = window.innerWidth;
      if (_width <= 575) {
        console.log('***********移动端设备访问***********');
        this.httpRequest.isWap = true;
        this.redirectUrl();
      } else {
        console.log('***********PC端设备访问***********');
        this.httpRequest.isWap = false;
        let _h = this.href.replace('wap', '');
        this.httpRequest.navTo(_h);
      }
    }
  }

  redirectUrl() {
    //跳转移动端页面 对路由地址进行判断
    this.httpRequest.routerArray.map((item) => {
      item.url =  this.httpRequest.isWap && item.url.indexOf('/wap') === -1 ? '/wap' + item.url : item.url;
    })
    console.log(this.httpRequest.routerArray);
    if (this.href) {
      if(this.href.indexOf('error') !== -1) {
        this.httpRequest.navTo('/wap');
      }else if (this.href.indexOf("wap") === -1) { // 判断是否已经处于 /wap 链接下
        let _href = '/wap/' + this.href;
        this.httpRequest.navTo(_href);
      }
    } else {
      this.httpRequest.navTo('/wap');
    }
  }
}
