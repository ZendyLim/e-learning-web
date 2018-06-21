import {Component} from '@angular/core';
import {AlertService} from "./alert/alert.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  alerts;

  constructor(private _alertService: AlertService) {
    this._alertService.subscribeAlerts().subscribe((result) => {
      this.alerts = result;
    });
  }

  dismiss(index: number) {
    this._alertService.clearAlert(index);
  }
}
