import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { LoginService } from "../services/login.service";
import { appointment } from '../shared/models/appointment.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  isLoading: boolean = true;
  appointments: appointment[] = [];

  constructor(
    private loginService: LoginService,
    private appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    this.loginService.getLoginStatus().subscribe((value: boolean) => this.isLoggedIn = value);
    if (this.isLoggedIn) this.appointments = this.appointmentService.appointmentsGetter;
    this.isLoading = false;
  }

}
