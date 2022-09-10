import { Injectable } from '@angular/core';
import { appointment } from 'src/app/shared/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointments: appointment[] = [
    {
      appointment: {
        date: '10.10.2022',
        time: '14:45'
      },
      patient: {
        firstname: 'Sven',
        lastname: 'Märki',
        mobile: '0797014710',
        email: 'sven.maerki@gmx.ch',
        birthdate: '29.06.2005'
      }
    },
    {
      appointment: {
        date: '09.09.2022',
        time: '08:00'
      },
      patient: {
        firstname: 'Sven',
        lastname: 'Märki',
        mobile: '0797014710',
        email: 'sven.maerki@gmx.ch',
        birthdate: '29.06.2005'
      }
    },
    {
      appointment: {
        date: '12.11.2022',
        time: '09:45'
      },
      patient: {
        firstname: 'Sven',
        lastname: 'Märki',
        mobile: '0797014710',
        email: 'sven.maerki@gmx.ch',
        birthdate: '29.06.2005'
      }
    },
    {
      appointment: {
        date: '15.10.2022',
        time: '16:00'
      },
      patient: {
        firstname: 'Sven',
        lastname: 'Märki',
        mobile: '0797014710',
        email: 'sven.maerki@gmx.ch',
        birthdate: '29.06.2005'
      }
    }
  ];

  get appointmentsGetter() {
    return this.appointments as appointment[];
  }

  appointmentGetter(i: number) {
    return this.appointments[i] as appointment;
  }

  constructor() {}

  addAppointment(appointment: appointment) {
    this.appointments.push(appointment);
  }

  deleteAppointment(i: number) {
    this.appointments.splice(i - 1, 1);
  }
}
