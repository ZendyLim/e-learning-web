import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";

@Component({
  selector: 'app-admin-user-index',
  templateUrl: './admin-user-index.component.html',
  styleUrls: ['./admin-user-index.component.scss']
})
export class AdminUserIndexComponent implements OnInit {

  data: any = [
    {
      username: 1,
      password: 1
    },
    {
      username: 2,
      password: 2
    }
  ];

  constructor(private _usersService: UsersService) {
  }

  ngOnInit() {
    this._usersService.getCorporateUsers()
      .subscribe((response) => {
        this.data = response.users;
      }, (err) => {
        console.error(err);
      })
  }
}
