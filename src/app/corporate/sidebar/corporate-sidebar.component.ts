import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-sidebar',
  templateUrl: './corporate-sidebar.component.html',
  styleUrls: ['./corporate-sidebar.component.scss']
})
export class CorporateSidebarComponent implements OnInit {

  items: string[] = [
    'Home',
    'User'
  ];

  constructor() { }

  ngOnInit() {
  }


}
