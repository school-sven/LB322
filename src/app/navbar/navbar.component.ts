import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.getLoginStatus().subscribe((value: boolean) => {
      this.isLoggedIn = value;
    });
  }

  changeLoginStatus() {
    this.loginService.changeLoginStatus();
  }

}
