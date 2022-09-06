import { Component, Input, OnInit } from '@angular/core';
import { appointment } from 'src/app/shared/models/appointment.model';
import { tableHeaders } from './appointment-table.data';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent implements OnInit {
  @Input() appointments!: appointment[];
  tableHeaders = tableHeaders;

  constructor() { }

  ngOnInit(): void {
  }

}
