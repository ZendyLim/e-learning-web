import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {MatDialog} from "@angular/material";
import {AdminUserIndexAddComponent} from "./admin-user-index-add/admin-user-index-add.component";

@Component({
  selector: 'app-admin-user-index',
  templateUrl: './admin-user-index.component.html',
  styleUrls: ['./admin-user-index.component.scss']
})
export class AdminUserIndexComponent implements OnInit {

  data: any = [
  ];

  constructor(private _usersService: UsersService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.search();
  }

  search(){
    this._usersService.getCorporateUsers()
      .subscribe((response) => {
        console.log(response);
        this.data = response.body.users;
      }, (err) => {
        console.error(err);
      })
  }

  openCreateDialog(): void{
    let dialogRef = this.dialog.open(AdminUserIndexAddComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.search();
      console.log('The dialog was closed');
    });
  }
}
