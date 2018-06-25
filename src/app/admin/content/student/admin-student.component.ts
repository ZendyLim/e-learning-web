import { Component, OnInit } from '@angular/core';
import {AdminHomeService} from "../home/admin-home.service";
import {AdminStudentService} from "./admin-student.service";

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.scss']
})
export class AdminStudentComponent implements OnInit {

  corporate_users = [];
  categories = [];
  extraOverviews = [];
  loading = false;
  total = 0;
  male = 0;
  female = 0;

  constructor(private _homeService:AdminHomeService, private _studentService:AdminStudentService) {

  }

  ngOnInit() {
    this.getStudentsOverview();
    this.getStudentsOverviewExtra();
  }

  getStudentsOverview() {
    this.loading = true;
    this._homeService.getStudentsOverview()
      .subscribe((result) => {
        this.categories = result.body.categories;
        this.loading = false;
        this.processStudentOverview();
      }, (err) => {
        console.error(err);
      })
  }

  getStudentsOverviewExtra() {
    this.loading = true;
    this._studentService.getStudentsOverviewExtra()
      .subscribe((result) => {
        this.extraOverviews = result.body.categories;
        this.loading = false;
      }, (err) => {
        console.error(err);
      })
  }

  processStudentOverview(){
    let cat = this.categories;

    for(let i = 0; i < cat.length; i++ ){
      this.total += cat[i].total;
      this.male += cat[i].male;
      this.female += cat[i].female;
    }
  }

}
