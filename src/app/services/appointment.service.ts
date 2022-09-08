import { Injectable } from '@angular/core';
import { appointment } from 'src/app/shared/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointments: appointment[] = [
    {
      id: 1,
      appointment: {
        date: '10.10.2022',
        time: '14:45',
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
      id: 2,
      appointment: {
        date: '09.09.2022',
        time: '08:00',
      },
      patient: {
        firstname: 'André',
        lastname: 'Märki',
        mobile: '079334783',
        email: 'andre.maerki@gmail.com',
        birthdate: '27.01.1974'
      }
    },
    {
      id: 3,
      appointment: {
        date: '12.11.2022',
        time: '09:45',
      },
      patient: {
        firstname: 'Mark',
        lastname: 'Zuckerburg',
        mobile: '0643029385',
        email: 'mark@meta.com',
        birthdate: '08.11.1985'
      }
    },
    {
      id: 4,
      appointment: {
        date: '15.10.2022',
        time: '16:00',
      },
      patient: {
        firstname: 'Sven',
        lastname: 'Märki',
        mobile: '0797014710',
        email: 'sven.maerki@gmx.ch',
        birthdate: '29.06.2005'

      }
    },
  ];

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

  deleteAppointment(i: number) {
    this.appointments.splice(i - 1, 1);
  }
}
