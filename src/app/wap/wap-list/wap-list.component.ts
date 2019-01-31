import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wap-list',
  templateUrl: './wap-list.component.html',
  styleUrls: ['./wap-list.component.scss']
})
export class WapListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let src = 'http://tfjyw.cdtfhr.com/aaa.mp4';
    let video = document.querySelector('#video');
    video.innerHTML = `
    <video style="width:100%;height:100%" autoplay="autoplay" controls>
          <source src="${src}" type="video/mp4"></source>
          您的浏览器不支持此视频格式
      </video>`;
  }

}
