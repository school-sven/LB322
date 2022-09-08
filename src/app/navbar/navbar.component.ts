import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {ModalService} from "../services/modal.service";
import {BsModalRef} from 'ngx-bootstrap/modal';
import {ShortcutModalComponent} from "../modals/shortcut-modal/shortcut-modal.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  modalRef!: BsModalRef;

  constructor(
    private loginService: LoginService,
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loginService.getLoginStatus().subscribe((value: boolean) => this.isLoggedIn = value);
  }

  changeLoginStatus() {
    this.loginService.changeLoginStatus();
  }

  showShortcuts() {
    this.modalRef = this.modalService.openLarge(ShortcutModalComponent, true)
  }

}
