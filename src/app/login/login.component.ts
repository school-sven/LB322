import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;

  get username() {
    return this.form.get('username') as UntypedFormControl;
  }

  get password() {
    return this.form.get('password') as UntypedFormControl;
  }

  constructor(private router: Router,
              private loginService: LoginService,
              private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      'username': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.changeLoginStatus();
    this.router.navigate(['home']);
  }
}
