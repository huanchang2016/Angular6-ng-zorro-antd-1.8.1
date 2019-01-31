import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wap-login',
  templateUrl: './wap-login.component.html',
  styleUrls: ['./wap-login.component.scss']
})
export class WapLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('wap login works!');
  }

}
