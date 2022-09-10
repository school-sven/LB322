import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ToastService } from '../services/toast.service';
import { ToasterPosition } from '../shared/models/toast.model';

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

  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: UntypedFormBuilder,
    private toastService: ToastService
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

  login() {
    this.loginService.changeLoginStatus();
    this.toastService.successToastr(
      'Sie haben sich erfolgreich angemeldet.',
      'Information',
      ToasterPosition.bottomLeft,
      2000,
      true
    );
    this.router.navigate(['home']);
  }
}
