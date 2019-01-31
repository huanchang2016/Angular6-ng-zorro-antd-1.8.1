import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/core/service/http-request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public urlArray:Array<string> = ['/account/register/user', '/account/register/company'];
  constructor(
    private httpRequest: HttpRequestService
  ) { }

  ngOnInit() {}

  changeNavTo(index:number) :void {
    this.httpRequest.navTo(this.urlArray[index]);
  }

}
