import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class AdminStudentService {

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
  getStudentsOverviewExtra(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getStudentsOverviewExtra`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }
}
