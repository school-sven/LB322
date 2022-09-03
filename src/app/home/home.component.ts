import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.loginService.getLoginStatus().subscribe((value: boolean) => this.isLoggedIn = value);
  }

}
