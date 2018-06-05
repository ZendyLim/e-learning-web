import { Component, OnInit } from '@angular/core';
import {AdminUserAddModalComponent} from "../../../admin/content/user/add-modal/admin-user-add-modal.component";
import {MatDialog} from "@angular/material";
import {CorporateUserService} from "./corporate-user.service";

@Component({
  selector: 'app-corporate-user',
  templateUrl: './corporate-user.component.html',
  styleUrls: ['./corporate-user.component.scss']
})
export class CorporateUserComponent implements OnInit {

  users = [];
  loading = false;

  constructor(private _userService: CorporateUserService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.loading = true;
    this._userService.getUsers()
      .subscribe((result) => {
        console.log(result);
        this.users = result.body.users;
        this.loading = false;
      }, (err) => {
        console.error(err);
      })
  }

  openAddDialog() {
    let dialogRef = this.dialog.open(AdminUserAddModalComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addNewUser(result);
      }
    });
  }

  addNewUser(body: any){
    this._userService.addUser(body)
      .subscribe((result) => {
        console.log(result);
        alert('User Created!');
        this.getUsers();
      }, (err) => {
        console.error(err);
      })
  }
}
