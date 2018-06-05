import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../../../../../services/users.service";

@Component({
  selector: 'app-admin-user-index-add',
  templateUrl: './admin-user-index-add.component.html',
  styleUrls: ['./admin-user-index-add.component.scss']
})
export class AdminUserIndexAddComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({
    username: new FormControl()
  });

  constructor(
    public dialogRef: MatDialogRef<AdminUserIndexAddComponent>,
    private _userService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  addUser() {
    this._userService.createCorporateUsers(this.addUserForm.value.username)
      .subscribe((result) => {
        this.dialogRef.close();
      })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
