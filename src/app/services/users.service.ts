import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getCorporateUsers(): Observable<any> {
    return this.http.get(`http://localhost:3000/v1/getCorporateUsers`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    });
  }
}
