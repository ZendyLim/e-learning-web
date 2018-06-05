import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-user-add-button',
  templateUrl: './admin-user-add-button.component.html',
  styleUrls: ['./admin-user-add-button.component.scss']
})
export class AdminUserAddButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<any>();

  click() {
    this.onClick.emit(null);
  }

  constructor() { }

  ngOnInit() {

  }

}
