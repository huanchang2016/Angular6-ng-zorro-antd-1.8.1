import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from './core/service/http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  port = window.location.port;
  public href:string = (window.location.href).split(this.port + '/')[1];
  constructor(private httpRequest: HttpRequestService) {}

  ngOnInit() {
    this.browserRedirect();
  }
  // equilpment 
  browserRedirect() {
    let sUserAgent = navigator.userAgent.toLowerCase();
    let bIsIpad = sUserAgent.indexOf("ipad") !== -1 ;
    let bIsIphoneOs = sUserAgent.indexOf("iphone os") !== -1;
    let bIsMidp = sUserAgent.indexOf("midp") !== -1;
    let bIsUc7 = sUserAgent.indexOf("rv:1.2.3.4") !== -1;
    let bIsUc = sUserAgent.indexOf("ucweb") !== -1;
    let bIsAndroid = sUserAgent.indexOf("android") !== -1;
    let bIsCE = sUserAgent.indexOf("windows ce") !== -1;
    let bIsWM = sUserAgent.indexOf("windows mobile") !== -1;

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      console.log('***********移动端设备访问***********');
      //跳转移动端页面
      if(this.href) {
        this.httpRequest.navTo('/wap/' + this.href);
      }else {
        this.httpRequest.navTo('/wap');
      }
    }else {
      let _width = window.innerWidth;
      if(_width <= 575) {
        console.log('***********移动端设备访问***********');
        if(this.href) {
          this.httpRequest.navTo('/wap/' + this.href);
        }else {
          this.httpRequest.navTo('/wap');
        }
      }else {
        console.log('***********PC端设备访问***********');
        let _h = this.href.replace('wap', '');
        this.httpRequest.navTo(_h);
      }
    }
  }
}
