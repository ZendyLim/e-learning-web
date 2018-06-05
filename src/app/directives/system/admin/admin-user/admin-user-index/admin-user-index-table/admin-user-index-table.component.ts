import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-admin-user-index-table',
  templateUrl: './admin-user-index-table.component.html',
  styleUrls: ['./admin-user-index-table.component.scss']
})
export class AdminUserIndexTableComponent implements OnChanges, OnInit {

  @Input('data') data: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    this.data = changes.data.currentValue;
  }

}
