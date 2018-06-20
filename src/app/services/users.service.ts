import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }
  //********************************* API ************************************************/
  getCorporateUsers(): Observable<any> {
    return this.http.get(`https://e-learning-backend.herokuapp.com/v1/getCorporateUsers`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      observe: "response"
    });
  }

  createCorporateUsers(username: string): Observable<any> {
    return this.http.post(`https://e-learning-backend.herokuapp.com/v1/createCorporateUser`, {
      username: username
    },{
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      observe: "response"
    })
  }
}
