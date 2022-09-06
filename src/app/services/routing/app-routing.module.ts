import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from 'src/app/home/appointment/appointment.component';
import { HomeComponent } from "../../home/home.component";
import { LoginComponent } from "../../login/login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'termin/:id', component: AppointmentComponent },
  { path: 'add-termin/:id', component: AppointmentComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
