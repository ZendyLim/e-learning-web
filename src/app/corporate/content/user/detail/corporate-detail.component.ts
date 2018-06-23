import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {CorporateUserService} from "../corporate-user.service";

@Component({
  selector: 'app-corporate-detail',
  templateUrl: './corporate-detail.component.html',
  styleUrls: ['./corporate-detail.component.scss']
})
export class CorporateDetailComponent implements OnInit {
  loading;
  users;
  idVal;
  activities;
  constructor(private activeRoute: ActivatedRoute, private _userService: CorporateUserService) { }

  ngOnInit( ) {
    this.idVal = this.activeRoute.snapshot.params['id'];
    this.getStudentByID();
  }

  getStudentByID() {
    this.loading = true;
    this._userService.getStudentByID(this.idVal)
      .subscribe((result) => {
        this.users = result.body.user;
        this.activities = result.body.activities;
        this.loading = false;
        console.log(this.users);
        console.log(this.activities);

      }, (err) => {
        console.error(err);
      })
  }

}
