import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/core/service/http-request.service';
import { NZ_MODAL_CONFIG } from 'ng-zorro-antd';

@Component({
  selector: 'app-index-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    // 当模态框弹出时：是否自动给body加上padding来隐藏滚动条
    { provide: NZ_MODAL_CONFIG, useValue: { autoBodyPadding: false }}
  ]
})
export class HomeComponent implements OnInit {
  isVisible:boolean = this.httpRequest.isShowModalPcIndex;
  
  constructor(
    private httpRequest: HttpRequestService
  ) { }

  ngOnInit() {
    
  }


  // handleOk(): void {
  //   console.log('Button ok clicked!');
  //   this.isVisible = this.httpRequest.isShowModalPcIndex = false;
  // }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = this.httpRequest.isShowModalPcIndex = false;
  }
}
