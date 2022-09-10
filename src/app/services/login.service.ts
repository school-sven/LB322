import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn: BehaviorSubject<boolean>;

  constructor() {
    this.isLoggedIn = new BehaviorSubject<boolean>(false);
  }

  getLoginStatus(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  changeLoginStatus() {
    this.isLoggedIn.next(!this.isLoggedIn.value);
  }
}
