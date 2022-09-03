import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-shortcut-modal',
  templateUrl: './shortcut-modal.component.html',
  styleUrls: ['./shortcut-modal.component.css']
})
export class ShortcutModalComponent implements OnInit {

  constructor(private activeModal: BsModalService) {
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.hide();
  }

}
