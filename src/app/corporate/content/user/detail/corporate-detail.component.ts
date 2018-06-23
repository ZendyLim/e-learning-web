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
  setLogin;
  studyReasonOption = [
    {
      "id" : 1,
      "text" : "it is necessary for work"
    },
    {
      "id" : 2,
      "text" : "it is a company order"
    },
    {
      "id" : 3,
      "text" : "I want to improve my career"
    },
    {
      "id" : 4,
      "text" : "I want to study abroad"
    },
    {
      "id" : 5,
      "text" : "I am interested in Japanese culture"
    },
    {
      "id" : 6,
      "text" : "Other"
    },
    ]
  studyArr = {
    T001 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0
    },
    T002 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T003 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T004 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T005 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T006 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T007 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T008 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T009 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T010 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T011 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T012 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    },
    T013 : {
      INITIAL : {
        correct: 0,
        mistake: 0,
      },
      VOCABULARY : {
        correct: 0,
        mistake: 0,
      },
      KANJI : {
        correct: 0,
        mistake: 0,
      },
      GRAMMAR : {
        correct: 0,
        mistake: 0,
      },
      LISTENING : {
        correct: 0,
        mistake: 0,
      },
      READING : {
        correct: 0,
        mistake: 0,
      },
      total : 0,
      average : 0      
    }
  }
  constructor(private activeRoute: ActivatedRoute, private _userService: CorporateUserService) { }

  ngOnInit( ) {
    this.idVal = this.activeRoute.snapshot.params['id'];
    this.getStudentByID();
  }
  printStudyReason(data){
    var dataArr = data.split('');
    var print = '';
    var split = '';
    for(var i = 0; i<dataArr.length;i++){
      if(dataArr[i] == "1"){
        print +=  split + " " + this.studyReasonOption[i].text;
        if(split == ""){
          split = ",";
        }
      }
    }
    return print;
  }
  getStudentByID() {
    this.loading = true;
    this._userService.getStudentByID(this.idVal)
      .subscribe((result) => {
        this.users = result.body.user;
        this.activities = result.body.activities;
        console.log(this.users);
        this.loading = false;
        this.setLoginFun();
        this.setScore();
      }, (err) => {
        console.error(err);
      })
  }
  setScore(){
    for(var i = 0;i<this.activities.length;i++){
      var topic = this.activities[i].topicId;
      if(this.activities[i].type !== 'LEARN'){
        if(this.activities[i].questions){
          for(var y=0;y<this.activities[i].questions.length;y++){
            if(this.activities[i].questions[y].correct  !== undefined && this.activities[i].questions[y].type !== undefined && this.studyArr[topic][this.activities[i].questions[y].type] !== undefined){
              if(this.activities[i].questions[y].correct == true){
                this.studyArr[topic][this.activities[i].questions[y].type]['correct'] += 1;
              }else{
                this.studyArr[topic][this.activities[i].questions[y].type]['mistake'] += 1;              
              }  
            }
          }
        }
      }
    }
 }
  setLoginFun(){
   var login = [];
   var checkDate = "";
   var startTime;
   var endTime;
   var time = 0;

   
   if(this.activities[0]){
    var countTime = this.activities[0].startTime * 1000;
    var dateParse = new Date(this.activities[0].startTime * 1000);
    startTime = dateParse;
    time = (this.activities[0].finishTime * 1000) - (this.activities[0].startTime  * 1000);
   
    checkDate = this.formatDate(dateParse);
      for(var i = 1; i<this.activities.length;i++){
        var dateNext = new Date(this.activities[i].startTime * 1000);
        //if(checkDate !== this.formatDate(dateNext)){
        if(this.activities[i].startTime * 1000 - countTime > 4500000 ) {
          var countTime = this.activities[i].startTime * 1000;
          endTime = new Date(this.activities[i - 1].finishTime   * 1000);

          var parseData = {
            startTime: startTime,
            endTime: endTime,
            time : time
          }
          login.push(parseData);  
          dateParse = new Date(this.activities[i].startTime * 1000);
          startTime = dateParse;
          checkDate = this.formatDate(dateParse);
          time = (this.activities[0].finishTime  * 1000) - (this.activities[0].startTime  * 1000);
        }else{
          time += (this.activities[0].finishTime  * 1000) - (this.activities[0].startTime  * 1000);
          
        }
      }
      this.setLogin = login;
      console.log(this.setLogin);
    }
  }

  countTotal(correct, mistake){
    if(mistake == 0){
      return 0;
    }else{
      return Math.floor((correct / (correct + mistake)) * 100);
    }
  }

  setTime(time){
    var newDate = new Date("01-01-2017");

    var setTounix = newDate.getTime();
    var getTimeDate = new Date(setTounix + time);

    return this.formatTime(getTimeDate);
  }
  getAllcountTotal(val){
    return Math.floor((this.countTotal(this.studyArr[val].VOCABULARY.correct , this.studyArr[val].VOCABULARY.mistake) + this.countTotal(this.studyArr[val].KANJI.correct , this.studyArr[val].KANJI.mistake) + this.countTotal(this.studyArr[val].GRAMMAR.correct , this.studyArr[val].GRAMMAR.mistake) + this.countTotal(this.studyArr[val].LISTENING.correct , this.studyArr[val].LISTENING.mistake) + this.countTotal(this.studyArr[val].READING.correct , this.studyArr[val].READING.mistake)) / 7);
  }
   //formating date
   formatDate(date){
    var sepDate = new Date(date);
    var year = sepDate.getFullYear();
    var month = sepDate.getMonth() + 1;
    
    var printMonth :string;
    var printDays : string;

    if( month < 10){
        printMonth = "0" + month;
     }else{
        printMonth = "" + month;
     }
     var days = sepDate.getDate();
     if( days < 10){
        printDays = "0" + days;
     }else{
        printDays = "" + days;
     }
     
    // console.log(dateSep);    q
     return year + "年" + printMonth + "月" + printDays + "日";
    
}

//formating date
formatTime(date){
  var sepDate = new Date(date);
  var hoursSet = sepDate.getHours().toString();
  var minuteSet = sepDate.getMinutes().toString();
  var returnHours = ""; 
  var returnMinutes = ""; 
   
  if(hoursSet.length == 1){
    returnHours = "0" + hoursSet;
  }else{
    returnHours =  hoursSet.toString();
  }
   
  if(minuteSet.length == 1){
    returnMinutes = "0" + minuteSet;
  }else{
    returnMinutes =  minuteSet.toString();
  }
  // console.log(dateSep);    q
   return returnHours + ":" +  returnMinutes;
  
}
printDate(join){
  console.log(join,"joi");
  if(join == undefined){
    return "";
  }else{
    var date = new Date(join * 1000);
    return this.formatDate(date);
  }
}
checkUser(){
  if(this.users == undefined){
    return false;
  }else{
    return true;
  }
}

printDataWeek(day,hours){
  var dayVal = day.split('');
  var daysTotal = 0;
  for(var i= 0; i<dayVal.length;i++){
    if(dayVal[i] == "1"){
      daysTotal +=1;
    }
  }
  return 5 * hours;
}
}
