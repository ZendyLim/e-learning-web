import {Component, OnInit} from '@angular/core';
import {AdminUserService} from "./admin-user.service";
import {MatDialog} from "@angular/material";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {AdminUserAddModalComponent} from "./add-modal/admin-user-add-modal.component";
import {AdminUserEditModalComponent} from "./edit-modal/admin-user-edit-modal.component";
import {AdminUserDeleteModalComponent} from "./delete-modal/admin-user-delete-modal.component";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {
  formSearch: FormGroup;
  searchKeyword = "";
  users = [];
  loading = false;

  constructor(private _userService: AdminUserService, public dialog: MatDialog,  private formBuilder : FormBuilder) {
  }

  ngOnInit() {
    this.getUsers();
    this.createForm();
  }
  //create form 
  createForm() {
    this.formSearch = this.formBuilder.group({
      search: ['', Validators.required], // name field
    });
  
  }

  getUsers() {
    this.loading = true;
    this._userService.getUsers()
      .subscribe((result) => {
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
  openEditDialog(index) {
    let dialogRef = this.dialog.open(AdminUserEditModalComponent, {
      width: '250px',
      data: {
        index
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        //this.addNewUser(result);
      }
    });
  }

  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }

  openDeleteDialog(index) {
    let dialogRef = this.dialog.open(AdminUserDeleteModalComponent, {
      width: '250px',
      data: {
        index
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.addNewUser(result);
      }
    });
  }

  addNewUser(body: any){
    this._userService.addUser(body)
      .subscribe((result) => {
        alert('User Created!');
        this.getUsers();
      }, (err) => {
        console.error(err);
      })
  }

  getBySearch(value){
    this.loading = true;
    this._userService.getUserBySearch(value)
      .subscribe((result) => {
        this.users = result.body.users;
        this.loading = false;

      }, (err) => {
        console.error(err);
      })
    
  }
}
