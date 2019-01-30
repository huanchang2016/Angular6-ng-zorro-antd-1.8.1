import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wap-index',
  templateUrl: './wap-index.component.html',
  styleUrls: ['./wap-index.component.scss']
})
export class WapIndexComponent implements OnInit {
  array = ['/assets/imgs/wap/wap_banner1.jpg', '/assets/imgs/wap/wap_banner2.jpg', '/assets/imgs/wap/wap_banner3.jpg' ];
  constructor() { }

  ngOnInit() {
  }

}
