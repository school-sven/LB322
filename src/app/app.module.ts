import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './services/routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoggedOutComponent } from "./shared/logged-out/logged-out.component";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ShortcutModalComponent } from './modals/shortcut-modal/shortcut-modal.component';
import { AppointmentComponent } from './home/appointment/appointment.component';
import { AppointmentTableComponent } from './home/appointment-table/appointment-table.component';
import { PositionComponent } from './position/position.component';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoggedOutComponent,
    LoginComponent,
    ShortcutModalComponent,
    AppointmentComponent,
    AppointmentTableComponent,
    PositionComponent,
    OpeningHoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
