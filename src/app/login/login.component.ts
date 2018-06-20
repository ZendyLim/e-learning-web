import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import * as jwt from 'jwt-decode';
import {AlertService} from "../alert/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  requesting: boolean = false;

  constructor(private _alertService: AlertService, private _authService: AuthService, private _router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.loginForm.disable();
    this.requesting = true;
    this._authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (response: HttpResponse<any>) => {
          localStorage.setItem('token', response.headers.get('Authorization'));
          this.loginForm.enable();
          this.requesting = false;
          if (jwt(response.headers.get('Authorization')).data.role == 'GAB_ADMIN') {
            this._router.navigateByUrl('/admin/user');
          } else {
            this._router.navigateByUrl('/corporate/user');
          }
        },
        (error: HttpErrorResponse) => {

          let msg = "";

          switch (error.status) {
            case 422:
              error.error.errors.forEach((err) => {
                msg += err.msg + ' ';
              });
              this._alertService.pushAlert('error', msg);
              break;
            case 401:
              this._alertService.pushAlert('error', 'Email/Password not match');
              break;
            default:
              this._alertService.pushAlert('error', 'Unknown error occurred!');
              break;
          }
          this.loginForm.enable();
          this.requesting = false;
        }
      )
    ;
  }
}
