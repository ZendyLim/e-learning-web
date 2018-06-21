import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-corporate-user-add-button',
  templateUrl: './corporate-user-add-button.component.html',
  styleUrls: ['./corporate-user-add-button.component.scss']
})
export class CorporateUserAddButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<any>();

  click() {
    this.onClick.emit(null);
  }

  constructor() { }

  ngOnInit() {

  }
}
