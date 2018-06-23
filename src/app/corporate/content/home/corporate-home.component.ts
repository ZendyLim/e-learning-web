import { Component, OnInit } from '@angular/core';
import { CorporateHomeService } from './corporate-home.service';

@Component({
  selector: 'app-corporate-home',
  templateUrl: './corporate-home.component.html',
  styleUrls: ['./corporate-home.component.scss']
})
export class CorporateHomeComponent implements OnInit {
  loading;
  home;
  students;
  constructor(private _homeService: CorporateHomeService ) {

   }

  ngOnInit() {
    this.getTotalStudents();
  }
  getTotalStudents() {
    this.loading = true;
    this._homeService.getTotalStudents()
      .subscribe((result) => {
        console.log(result.body);
        this.students = result.body.students;
        this.loading = false;
      }, (err) => {
        console.error(err);
      })
  }

  
}
