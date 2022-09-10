import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/shared/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointments: Appointment[] = [
    {
      appointment: {
        date: '2022-10-10',
        time: '14:45'
      },
      patient: {
        firstname: 'Sven',
        lastname: 'Märki',
        mobile: '0797014710',
        email: 'sven.maerki@gmx.ch',
        birthdate: '2005-06-29'
      }
    },
    {
      appointment: {
        date: '2022-09-09',
        time: '08:00'
      },
      patient: {
        firstname: 'Sven',
        lastname: 'Märki',
        mobile: '0797014710',
        email: 'sven.maerki@gmx.ch',
        birthdate: '2005-06-29'
      }
    },
    {
      appointment: {
        date: '2022-11-12',
        time: '09:45'
      },
      patient: {
        firstname: 'Sven',
        lastname: 'Märki',
        mobile: '0797014710',
        email: 'sven.maerki@gmx.ch',
        birthdate: '2005-06-29'
      }
    },
    {
      appointment: {
        date: '2022-10-15',
        time: '16:00'
      },
      patient: {
        firstname: 'Sven',
        lastname: 'Märki',
        mobile: '0797014710',
        email: 'sven.maerki@gmx.ch',
        birthdate: '2005-06-29'
      }
    }
  ];

  get appointmentsGetter() {
    return this.appointments as Appointment[];
  }

  appointmentGetter(i: number) {
    return this.appointments[i] as Appointment;
  }

  constructor() {}

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }

  deleteAppointment(i: number) {
    this.appointments.splice(i - 1, 1);
  }
}
