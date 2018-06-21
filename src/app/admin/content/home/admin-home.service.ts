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

  getTotalStudents(): Observable<any> {
    return this._http.get(`http://www.mocky.io/v2/5b2b01c83000006b009cd51d`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }
}
