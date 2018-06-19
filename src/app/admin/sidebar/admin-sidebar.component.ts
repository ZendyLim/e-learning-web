import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  items: {name, link}[] = [
    {name: 'Home', link: '/admin'},
    {name: 'User', link: '/admin/user'},
    {name: 'Gab', link: '/admin/gab'},
    {name: 'Logout', link: '/'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
