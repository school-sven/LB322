import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ToastService } from 'src/app/services/toast.service';
import { Appointment } from 'src/app/shared/models/appointment.model';
import { ToasterPosition } from 'src/app/shared/models/toast.model';
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
    private fb: UntypedFormBuilder,
    private toastService: ToastService
  ) {
    this.form = this.fb.group({
      appointment: this.fb.group({
        date: ['', [Validators.required]],
        time: ['', [Validators.required]],
      }),
      patient: this.fb.group({
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        mobile: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        birthdate: ['', [Validators.required]],
      }),
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      if (params['id']) {
        this.form.disable();
        this.showData = true;
        this.id = params['id'];
        this.appointment = this.appointmentService.appointmentGetter(
          this.id - 1
        );
        this.form.setValue(this.appointment);
      }
    });
  }

  reserveAppointment() {
    this.appointmentService.addAppointment(mapAppointmentData(this.form));
    this.toastService.successToastr(
      'Termin erfolgreich reserviert',
      'Information',
      ToasterPosition.bottomLeft,
      2000,
      true
    );
    this.router.navigate(['/home']);
  }

  deleteAppointment() {
    this.appointmentService.deleteAppointment(this.id);
    this.toastService.successToastr(
      'Termin erfolgreich gelöscht',
      'Information',
      ToasterPosition.bottomLeft,
      2000,
      true
    );
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
