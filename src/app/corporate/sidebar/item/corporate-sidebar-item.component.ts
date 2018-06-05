import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-corporate-sidebar-item',
  templateUrl: './corporate-sidebar-item.component.html',
  styleUrls: ['./corporate-sidebar-item.component.scss']
})
export class CorporateSidebarItemComponent implements OnChanges, OnInit {

  @Input('item') item: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.item = changes.item.currentValue;
  }

}
