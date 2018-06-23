import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class AdminHomeService {

  constructor(private _http: HttpClient) {
  }

  statusArr = [{
    id: "1",
    title: "Active"
  },{
    id: "0",
    title: "Non Active"
  }];

  //********************************* API ************************************************/
  getCorporateUsers(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getCorporateUsers`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }

  getStudentsOverview(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getStudentsOverview`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }
}
