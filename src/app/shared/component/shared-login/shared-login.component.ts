import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/core/service/http-request.service';

@Component({
  selector: 'app-shared-login',
  templateUrl: './shared-login.component.html',
  styleUrls: ['./shared-login.component.scss']
})
export class SharedLoginComponent implements OnInit {
  public isLoading: boolean = false; // loading动画效果
  validateForm: FormGroup;
  public isWap: boolean = this.httpRequest.isWap;

  constructor(
    private fb: FormBuilder,
    private httpRequest: HttpRequestService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm({ value, valid }, e: Event): void {
    e.preventDefault();
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (valid) {
      console.log(value);
      this.isLoading = true;
      this.httpRequest.showMessage('loading', '登录中，请稍后...');
      // 模拟登录接口
      setTimeout(() => {
        // 登录成功后，需要修改全局的用户登录状态
        this.httpRequest.isLogin = true;
        // 登录成功后，需要修改全局的用户登录状态

        this.isLoading = false;
        this.httpRequest.showMessage('success', '登录成功');
        this.httpRequest.navTo(this.isWap ? '/wap' : '/index');
      }, 3000);
    }

  }
}
