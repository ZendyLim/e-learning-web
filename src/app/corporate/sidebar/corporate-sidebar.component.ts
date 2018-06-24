import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-sidebar',
  templateUrl: './corporate-sidebar.component.html',
  styleUrls: ['./corporate-sidebar.component.scss']
})
export class CorporateSidebarComponent implements OnInit {

  items: {name, link}[] = [
    {name: 'Home', link: '/corporate'},
    {name: 'Student', link: '/corporate/user'},
    {name: 'Analytic', link: '/corporate/analytic'},
    {name: 'Logout', link: '/'},
  ];

  constructor() { }

  ngOnInit() {
  }


}
