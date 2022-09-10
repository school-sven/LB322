import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/shared/models/appointment.model';
import { tableHeaders } from './appointment-table.data';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
})
export class AppointmentTableComponent implements OnInit {
  @Input() appointments!: Appointment[];
  tableHeaders = tableHeaders;

  constructor() { }

  ngOnInit(): void {
  }

}
