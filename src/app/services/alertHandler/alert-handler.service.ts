import { Injectable } from '@angular/core';
import { AlertType } from '../../types/alert';

@Injectable({
  providedIn: 'root',
})
export class AlertHandlerService {
  public type: AlertType = AlertType.DANGER;
  public message: string = 'No message from service';
  public isShow: boolean = false;

  constructor() {}

  public setAlert(type: AlertType, message: string): void {
    this.type = type;
    this.message = message;
    this.isShow = true;

    setTimeout(() => {
      this.hideAlert();
    }, 6000);
  }

  public hideAlert(): void {
    this.isShow = false;
  }
}
