import { Injectable } from '@angular/core';
import { appointment } from 'src/app/shared/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointments: appointment[] = [{
    id: 1,
    date: '10.10.2022',
    time: '14:45',
    firstname: 'Sven',
    lastname: 'Märki',
    mobile: '0797014710',
    email: 'sven.maerki@gmx.ch'
  }];

  get appointmentsGetter() {
    return this.appointments as appointment[];
  }

  appointmentGetter(i: number) {
    return this.appointments[i] as appointment;
  }

  constructor() { }

  addAppointment(appointment: appointment) {
    this.appointments.push(appointment);
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }
}
