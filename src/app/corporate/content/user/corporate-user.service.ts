import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CorporateUserService {

  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getUsers`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }

  addUser(body: any): Observable<any> {
    return this._http.post(`https://e-learning-backend.herokuapp.com/v1/createCorporateUser`,
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
