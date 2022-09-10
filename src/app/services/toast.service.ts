import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToasterPosition } from '../shared/models/toast.model';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private toastr: ToastrService) {}

  public successToastr(
    bodyText: string,
    titleText: string,
    position: ToasterPosition,
    timeOut: number,
    progressBar: boolean
  ) {
    this.toastr.success(bodyText, titleText, {
      positionClass: position,
      timeOut: timeOut,
      progressBar: progressBar,
    });
  }
}
