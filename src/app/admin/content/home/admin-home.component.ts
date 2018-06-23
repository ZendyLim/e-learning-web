import { Component, OnInit } from '@angular/core';
import {AdminHomeService} from "./admin-home.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  corporate_users = [];
  students = [];
  loading = false;

  constructor(private _homeService:AdminHomeService) { 

  }

  ngOnInit() {
    this.getCorporateUsers();
    this.getTotalStudents();
  }

  printStatus(id){
    var count = this._homeService.statusArr.length;
    for(var i = 0; i<count; i++){
      if(this._homeService.statusArr[i]['id'] == id){
        return this._homeService.statusArr[i]['title'];
      }
    }
  }

  getCorporateUsers() {
    this.loading = true;
    this._homeService.getCorporateUsers()
      .subscribe((result) => {
        this.corporate_users = result.body.users;
        this.loading = false;
      }, (err) => {
        console.error(err);
      })
  }

  getTotalStudents() {
    this.loading = true;
    this._homeService.getTotalStudents()
      .subscribe((result) => {
        this.students = result.body.students;
        this.loading = false;
      }, (err) => {
        console.error(err);
      })
  }
}
