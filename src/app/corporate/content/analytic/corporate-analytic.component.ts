import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-corporate-analytic',
  templateUrl: './corporate-analytic.component.html',
  styleUrls: ['./corporate-analytic.component.scss']
})
export class CorporateAnalyticComponent implements OnInit {

  constructor() { }
  filterForm : FormGroup = new FormGroup({
    startAge: new FormControl(''),
    endAge: new FormControl(''),
    remainingDate: new FormControl(''),
  });
  ngOnInit() {
  }
  submitFilter(){
    console.log(this.filterForm.value)
  }
}
