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
  
}
