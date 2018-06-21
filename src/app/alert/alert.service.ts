import {Injectable} from '@angular/core';
import {Subject} from "rxjs/internal/Subject";

@Injectable()
export class AlertService {

  private alerts: { type, text }[] = [];
  private $alerts: Subject<{ type, text }[]> = new Subject<{ type, text }[]>();

  constructor() {
  }

  pushAlert(type, text) {
    this.alerts.push({type: type, text: text});
    this.$alerts.next(this.alerts);
  }

  clearAlert(index) {
    console.log(index);
    console.log(this.alerts);
    this.alerts.splice(index, 1);
    console.log(this.alerts);
    this.$alerts.next(this.alerts);
  }

  subscribeAlerts() {
    return this.$alerts.asObservable();
  }
}
