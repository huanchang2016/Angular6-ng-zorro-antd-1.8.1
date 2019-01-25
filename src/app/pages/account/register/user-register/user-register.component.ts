import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/core/service/http-request.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpRequest: HttpRequestService
  ) { }

  submitForm({ value, valid }, e: Event): void {
    e.preventDefault();

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    console.log(value);
    console.log(valid);
    if (valid) {
      if (!value.agree) {
        this.httpRequest.showMessage('error', '您需要阅读并同意《用户协议》！');
      } else {
        this.httpRequest.showMessage('loading', '注册资料提交中, 请稍后......');
        setTimeout(() => {
          this.httpRequest.showMessage('success', '注册成功！ 立即登录');
          this.httpRequest.navTo('/account/login');
        }, 3000);
      }
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      email: [null, [Validators.email]],
      phoneNumberPrefix: ['+86', [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      website: [null],
      captcha: [null, [Validators.required]],
      agree: [false, [Validators.required]]
    });
  }
}
