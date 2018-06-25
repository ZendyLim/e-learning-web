import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class AdminAnalyticService {

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
  getCourseGoiData(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getCourseGoiData`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }

  getCourseBunpoData(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getCourseBunpoData`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }

  getCourseKanjiData(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getCourseKanjiData`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }

  getCourseListeningData(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getCourseListeningData`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }

  getCourseReadingData(): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getCourseReadingData`,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        observe: "response"
      })
  }
}
