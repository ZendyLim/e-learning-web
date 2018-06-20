import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`http://localhost:3000/v1/login`,
      {username: username, password: password},
      {
        headers: {
          'Content-Type': 'application/json'
        },
        observe: 'response'
      }
    )
  }

}
