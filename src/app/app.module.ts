import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './services/routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './home/appointment/appointment.component';
import { AppointmentTableComponent } from './home/appointment-table/appointment-table.component';
import { PositionComponent } from './position/position.component';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    AppointmentComponent,
    AppointmentTableComponent,
    PositionComponent,
    OpeningHoursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
