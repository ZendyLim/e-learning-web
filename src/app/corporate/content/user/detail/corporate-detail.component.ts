import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corporate-detail',
  templateUrl: './corporate-detail.component.html',
  styleUrls: ['./corporate-detail.component.scss']
})
export class CorporateDetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.params['id']);
  }

}
