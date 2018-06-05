import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-admin-sidebar-item',
  templateUrl: './admin-sidebar-item.component.html',
  styleUrls: ['./admin-sidebar-item.component.scss']
})
export class AdminSidebarItemComponent implements OnChanges, OnInit {

  @Input('item') item;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.item = changes.item.currentValue;
  }

  ngOnInit() {
  }

}
