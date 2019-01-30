import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/core/service/http-request.service';

@Component({
  selector: 'app-web-top',
  templateUrl: './web-top.component.html',
  styleUrls: ['./web-top.component.scss']
})
export class WebTopComponent implements OnInit {
  public isLogin:boolean = this.httpRequest.isLogin;

  constructor(
    private httpRequest: HttpRequestService
  ) { }

  ngOnInit() { }

  loginOut() {
    this.isLogin = false;
    this.httpRequest.loginStatusEmitter.emit();
  }
}
