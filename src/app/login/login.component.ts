import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";

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

  constructor(private _authService: AuthService, private _router: Router) {
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
          this._router.navigateByUrl('/admin/user');
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.loginForm.enable();
          this.requesting = false;
        }
      )
    ;
  }
}
