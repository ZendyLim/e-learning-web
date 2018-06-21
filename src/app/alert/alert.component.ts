import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input('alert') alert: { text, type };
  @Output() dismiss = new EventEmitter<any>();

  clear() {
    this.dismiss.emit(null);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
