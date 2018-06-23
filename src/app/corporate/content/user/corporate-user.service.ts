import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CorporateUserService {

  constructor(private _http: HttpClient) {
  }
  statusArr = [{
    id: "1",
    title: "Active"
  },{
    id: "0",
    title: "Non Active"
  }];
  getUsers(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getUsers`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }
  getUserBySearch(searchVal:string): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getUsers?keyword=` + searchVal,
      {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        observe: "response"
      })
  }


  getStudentByID(value:string): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getStudentInfo?studentId=` + value,
      {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        observe: "response"
      })
  }

  addUser(body: any): Observable<any> {
    return this._http.post(`https://e-learning-backend.herokuapp.com/v1/createUser`,
      body,
      {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        observe: "response"
      })
  }

  updateUser(body: any): Observable<any> {
    return this._http.post(`https://e-learning-backend.herokuapp.com/v1/updateUser`,
      body,
      {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        observe: "response"
      })
  }
  
     //Make sorting
     getSorting(array, orderBy, asc = true){
      if (!orderBy || orderBy.trim() == ""){
        return array;
      } 
  
      //ascending
      if (asc){
          return Array.from(array).sort((item1: any, item2: any) => { 
          return this.orderByComparator(item1[orderBy], item2[orderBy]);
        });
      }
      else{
        //not asc
          return Array.from(array).sort((item1: any, item2: any) => { 

          return this.orderByComparator(item2[orderBy], item1[orderBy]);
        });
      }
  
  }
  //order Sorting
  orderByComparator(a:any, b:any):number{
     if(a !== null && b !== null){     
      if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
        //Isn't a number so lowercase the string to properly compare
          if(this.checkFormatDate(a) || this.checkFormatDate(b)){
              if(a < b) return -1;
              if(a > b) return 1;  
          }else{
              console.log(a.toLowerCase() + ":" + b.toLowerCase() + ":" + (a.toLowerCase() < b.toLowerCase()));

              if(a.toLowerCase() < b.toLowerCase()) return -1;
              if(a.toLowerCase() > b.toLowerCase()) return 1;  
          }
      }
      else{
          
        //Parse strings as numbers to compare properly
        if(parseFloat(a) < parseFloat(b)) return -1;
        if(parseFloat(a) > parseFloat(b)) return 1;
       }
  
      return 0; //equal each other
      }else{
          return 0;
      }
  }

  

  checkFormatDate(date) {
    var parms = date.split(/[\.\-\/]/);
    var yyyy = parseInt(parms[0],10);
    var mm   = parseInt(parms[1],10);
    var dd   = parseInt(parms[2],10);
    var dateCheck = new Date(yyyy,mm-1,dd,0,0,0,0);
    return mm === (dateCheck.getMonth()+1) && dd === dateCheck.getDate() && yyyy === dateCheck.getFullYear();

    // var parsedDate = Date.parse(date);
    // if (isNaN(date) && !isNaN(parsedDate)) {
    //     return true;
    // }else{
    //     return false;
    // }
}
}
