import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/core/service/http-request.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public isLoading:boolean = false;
  public isCaptcha:boolean = false;
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
    if (valid) {
        this.isLoading = true;
        this.httpRequest.showMessage('loading', '注册资料提交中, 请稍后......');
        setTimeout(() => {
          this.isLoading = false;
          this.httpRequest.showMessage('success', '注册成功！ 立即登录');
          this.httpRequest.navTo('/account/login');
        }, 3000);
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
    this.isCaptcha = true;
    setTimeout(()=> this.isCaptcha = false, 3000);
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required, Validators.pattern('[a-zA-Z]{1,}')]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]{6,12}')]],
      captcha: [null, [Validators.required ]]
    });
  }
}
