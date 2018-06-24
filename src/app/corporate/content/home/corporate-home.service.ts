import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class CorporateHomeService {

  constructor(private _http: HttpClient) {
  }

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
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getStudentsOverviewForCorporate`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }
}
