import { Component, OnInit } from '@angular/core';
import {AdminAnalyticService} from "./admin-analytic.service";

@Component({
  selector: 'app-admin-analytic',
  templateUrl: './admin-analytic.component.html',
  styleUrls: ['./admin-analytic.component.scss']
})
export class AdminAnalyticComponent implements OnInit {

  goiDatas = [];
  bunpoDatas = [];
  kanjiDatas = [];
  listeningDatas = [];
  readingDatas = [];
  loading = false;

  constructor(private _analyticService:AdminAnalyticService) { 

  }

  ngOnInit() {
    this.getCourseGoiData();
    this.getCourseBunpoData();
    this.getCourseKanjiData();
    this.getCourseListeningData();
    this.getCourseReadingData();
  }

  getCourseGoiData() {
    this.loading = true;
    this._analyticService.getCourseGoiData()
      .subscribe((result) => {
        this.goiDatas = result.body.activities;
        this.loading = false;
      }, (err) => {
        console.error(err);
      })
  }

  getCourseBunpoData() {
    this.loading = true;
    this._analyticService.getCourseBunpoData()
      .subscribe((result) => {
        this.bunpoDatas = result.body.activities;
        this.loading = false;
      }, (err) => {
        console.error(err);
      })
  }

  getCourseKanjiData() {
    this.loading = true;
    this._analyticService.getCourseKanjiData()
      .subscribe((result) => {
        this.kanjiDatas = result.body.activities;
        this.loading = false;
      }, (err) => {
        console.error(err);
      })
  }

  getCourseListeningData() {
    this.loading = true;
    this._analyticService.getCourseListeningData()
      .subscribe((result) => {
        this.listeningDatas = result.body.activities;
        this.loading = false;
      }, (err) => {
        console.error(err);
      })
  }

  getCourseReadingData() {
    this.loading = true;
    this._analyticService.getCourseReadingData()
      .subscribe((result) => {
        this.readingDatas = result.body.activities;
        this.loading = false;
      }, (err) => {
        console.error(err);
      })
  }

  checkStudyTypes(val) {
    if(val != undefined){
      return this.convertTwoDecimal(val);
    }
    else{
      return 0;
    }
  }

  convertTwoDecimal(val){
    return parseFloat(val).toFixed(2);
  }

}
