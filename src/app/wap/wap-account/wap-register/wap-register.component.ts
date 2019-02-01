import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/core/service/http-request.service';

@Component({
  selector: 'app-wap-register',
  templateUrl: './wap-register.component.html',
  styleUrls: ['./wap-register.component.scss']
})
export class WapRegisterComponent implements OnInit {
  public urlArray:Array<string> = ['/wap/account/register/user', '/wap/account/register/company'];
  constructor(
    private httpRequest: HttpRequestService
  ) { }

  ngOnInit() {}

  changeNavTo(index:number) :void {
    this.httpRequest.navTo(this.urlArray[index]);
  }
}
