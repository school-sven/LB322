import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
import { appointment } from 'src/app/shared/models/appointment.model';
import { patientFields, appointmentFields } from './appointment.data';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit, OnDestroy {
  id: number;
  appointment: appointment;
  patientFields = patientFields;
  appointmentFields = appointmentFields;
  routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.appointment = this.appointmentService.appointmentGetter(this.id - 1);
    });
  }

  deleteAppointment() {
    this.appointmentService.deleteAppointment(this.appointment.id);
    this.router.navigate(['home'])
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
