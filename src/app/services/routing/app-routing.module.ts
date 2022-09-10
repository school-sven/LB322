import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from 'src/app/home/appointment/appointment.component';
import { OpeningHoursComponent } from 'src/app/opening-hours/opening-hours.component';
import { PositionComponent } from 'src/app/position/position.component';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'termin/:id', component: AppointmentComponent },
  { path: 'add-termin', component: AppointmentComponent },
  { path: 'standort', component: PositionComponent },
  { path: 'oeffnungszeiten', component: OpeningHoursComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
