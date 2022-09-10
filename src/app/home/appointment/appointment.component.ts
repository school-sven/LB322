import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/shared/models/appointment.model';
import { patientFields, appointmentFields } from './appointment.data';
import { mapAppointmentData } from './appointment.mapper';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent implements OnInit, OnDestroy {
  form: UntypedFormGroup;
  id: number;
  showData: boolean = false;
  appointment: Appointment;
  routeSub: Subscription;
  patientFields = patientFields;
  appointmentFields = appointmentFields;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private router: Router,
    private fb: UntypedFormBuilder
  ) {
    this.form = this.fb.group({
      appointment: this.fb.group({
        date: ['', [Validators.required]],
        time: ['', [Validators.required]]
      }),
      patient: this.fb.group({
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        email: ['', [Validators.required, Validators.email]],
        birthdate: ['', [Validators.required]]
      })
    })
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.form.disable();
        this.showData = true;
        this.id = params['id'];
        this.appointment = this.appointmentService.appointmentGetter(this.id - 1);
        this.form.setValue(this.appointment);
      }
    });
  }

  reserveAppointment() {
    this.appointmentService.addAppointment(mapAppointmentData(this.form));
    this.router.navigate(['/home'])
  }

  deleteAppointment() {
    this.appointmentService.deleteAppointment(this.id);
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
