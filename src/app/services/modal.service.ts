import {Injectable} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: BsModalService) {
  }

  openSmall(
    modalTemplate: any,
    escapable?: boolean,
    classes?: any
  ): BsModalRef {
    return this.open(modalTemplate, 'sm', escapable, classes);
  }

  openMedium(
    modalTemplate: any,
    escapable?: boolean,
    classes?: any
  ): BsModalRef {
    return this.open(modalTemplate, 'md', escapable, classes);
  }

  openLarge(
    modalTemplate: any,
    escapable?: boolean,
    classes?: any
  ): BsModalRef {
    return this.open(modalTemplate, 'xl', escapable, classes);
  }

  private open(
    content: any,
    size?: 'sm' | 'md' | 'lg' | 'xl',
    escapable?: boolean,
    classes?: string
  ) {
    return this.modalService.show(content, {
      class: `modal-dialouge-centered modal-${size} ${classes}`,
      backdrop: escapable ? true : 'static',
      keyboard: !!escapable,
    });
  }

}
