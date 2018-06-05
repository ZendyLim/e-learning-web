import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class AdminUserService {

  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getCorporateUsers`,
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
