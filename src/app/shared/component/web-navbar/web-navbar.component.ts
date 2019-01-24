import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from 'src/app/core/service/http-request.service';
import { Permission } from 'src/app/data/config';

@Component({
  selector: 'app-web-navbar',
  templateUrl: './web-navbar.component.html',
  styleUrls: ['./web-navbar.component.scss']
})
export class WebNavbarComponent implements OnInit {
  public permission: Permission = this.httpRequest.permission;
  constructor(
    private route: Router,
    private httpRequest: HttpRequestService
  ) {
  }

  ngOnInit() {
  }

  navByUrl(url:string): void {
    this.route.navigateByUrl(url);
  }
}
