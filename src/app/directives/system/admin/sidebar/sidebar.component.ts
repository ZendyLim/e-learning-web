import { Component, OnInit } from '@angular/core';
import {MenuItem} from "./menu-item";

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[] = [
    new MenuItem('home', 'Home', '/'),
    new MenuItem('user', 'User', '/user')
  ];

  constructor() { }

  ngOnInit() {
  }

}
