import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
import { appointment } from 'src/app/shared/models/appointment.model';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit, OnDestroy {
  id: number;
  appointment: appointment;
  routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.appointment = this.appointmentService.appointmentGetter(this.id - 1);
      console.log(this.appointment)
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
