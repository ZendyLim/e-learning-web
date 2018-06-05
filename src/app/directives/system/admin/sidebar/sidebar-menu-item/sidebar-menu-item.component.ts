import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../menu-item";

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss']
})
export class SidebarMenuItemComponent implements OnInit {
  @Input('item') item: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
