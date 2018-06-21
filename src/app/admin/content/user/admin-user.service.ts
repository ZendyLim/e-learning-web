import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class AdminUserService {

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


  updateUser(body: any): Observable<any> {
    return this._http.post(`https://e-learning-backend.herokuapp.com/v1/updateCorporateUser`,
      body,
      {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        observe: "response"
      })
  }


  deleteUser(id:number): Observable<any> {
    return this._http.delete(`https://e-learning-backend.herokuapp.com/v1/createCorporateUser`,
      {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        observe: "response"
      })
  }
  
  getUserBySearch(searchVal:string): Observable<any> {
    return this._http.get(`https://e-learning-backend.herokuapp.com/v1/getCorporateUsers?keyword=` + searchVal,
      {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        observe: "response"
      })
  }
}
