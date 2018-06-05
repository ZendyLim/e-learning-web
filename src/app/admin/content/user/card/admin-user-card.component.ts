import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-user-card',
  templateUrl: './admin-user-card.component.html',
  styleUrls: ['./admin-user-card.component.scss']
})
export class AdminUserCardComponent implements OnInit {

  @Input('user') user;

  constructor() { }

  ngOnInit() {
  }

}
