import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-corporate-user-card',
  templateUrl: './corporate-user-card.component.html',
  styleUrls: ['./corporate-user-card.component.scss']
})
export class CorporateUserCardComponent implements OnInit {

  @Input('user') user;

  constructor() { }

  ngOnInit() {
  }


}
