import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getCorporateUsers(): Observable<any> {
    return this.http.get(`http://localhost:3000/v1/getCorporateUsers`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      observe: "response"
    });
  }

  createCorporateUsers(username: string): Observable<any> {
    return this.http.post(`http://localhost:3000/v1/createCorporateUser`, {
      username: username
    },{
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      observe: "response"
    })
  }
}
