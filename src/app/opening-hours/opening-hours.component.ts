import { Component, OnInit } from '@angular/core';
import { freeDays, openingHours } from './opening-hours.data';

@Component({
  selector: 'app-opening-hours',
  templateUrl: './opening-hours.component.html',
})
export class OpeningHoursComponent implements OnInit {
  openingHours: {
    weekday: string;
    forenoonTime: string;
    afternoonTime: string;
  }[] = openingHours;
  
  freeDays: { 
    dayName: string; 
    date: string }[] = freeDays;

  constructor() {}

  ngOnInit(): void {}
}
