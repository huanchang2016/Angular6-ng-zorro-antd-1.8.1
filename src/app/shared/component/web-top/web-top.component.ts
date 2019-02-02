import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpRequestService } from 'src/app/core/service/http-request.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-web-top',
  templateUrl: './web-top.component.html',
  styleUrls: ['./web-top.component.scss']
})
export class WebTopComponent implements OnInit, OnDestroy {
  public isLogin:boolean = this.httpRequest.isLogin;

  public currentTime:string = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
  public timer:any = null; // 时间渲染及时更新

  constructor(
    private httpRequest: HttpRequestService
  ) {
    //  date-fns 时间处理库
    // 调用聚合数据  万年历接口： 渲染当前时间 、节气、农历以及节日
  //   this.httpRequest.getCurrentDateInfo(t).subscribe(res => {
  //     console.log(res);
  //   })
  }

  ngOnInit() {
    this.timer = setInterval(()=>{
      this.currentTime = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    }, 400);
  }

  loginOut() {
    this.isLogin = false;
    this.httpRequest.loginStatusEmitter.emit();
  }
  ngOnDestroy(){
    clearInterval(this.timer);
 }

}
