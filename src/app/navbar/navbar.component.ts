import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ToastService } from '../services/toast.service';
import { ToasterPosition } from '../shared/models/toast.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private loginService: LoginService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loginService
      .getLoginStatus()
      .subscribe((value: boolean) => (this.isLoggedIn = value));
  }

  changeLoginStatus() {
    this.loginService.changeLoginStatus();
    this.toastService.successToastr(
      this.isLoggedIn
        ? 'Sie haben sich erfolgreich angemeldet.'
        : 'Sie haben sich erfolgreich abgemeldet.',
      'Information',
      ToasterPosition.bottomLeft,
      2000,
      true
    );
  }
}
