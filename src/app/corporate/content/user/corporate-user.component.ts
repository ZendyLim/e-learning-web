import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {CorporateUserService} from "./corporate-user.service";
import {CorporateUserAddModalComponent} from "./add-modal/corporate-user-add-modal.component";
import {CorporateUserEditModalComponent} from "./edit-modal/corporate-user-edit-modal.component";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-corporate-user',
  templateUrl: './corporate-user.component.html',
  styleUrls: ['./corporate-user.component.scss']
})
export class CorporateUserComponent implements OnInit {
  formSearch: FormGroup;

  users = [];
  loading = false;

  constructor(private _userService: CorporateUserService, public dialog: MatDialog, private formBuilder : FormBuilder) {
  }

  ngOnInit() {
    this.getUsers(),
    this.createForm()
  }
  //create form 
  createForm() {
    this.formSearch = this.formBuilder.group({
      search: ['', Validators.required], // name field
    });
  }

  printStatus(id){
    var count = this._userService.statusArr.length;
    for(var i = 0; i<count; i++){
      if(this._userService.statusArr[i]['id'] == id){
        return this._userService.statusArr[i]['title'];
      }
    }
  }
  getBySearch(value){
    this.loading = true;
    //this._userService.getUserBySearch(value)
    this._userService.getUsers()
      .subscribe((result) => {
        this.users = result.body.users;
        this.loading = false;

      }, (err) => {
        console.error(err);
      })
    
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
    let dialogRef = this.dialog.open(CorporateUserAddModalComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log( JSON.stringify(result));
        //this.addNewUser(result);
      }
    });
  }


  updateNewUser(body: any){
    console.log(body);
    this._userService.addUser(body)
      .subscribe((result) => {
        alert('User Updated!');
        this.getUsers();
      }, (err) => {
        console.error(err);
      })
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

  openEditDialog(index) {
    let dialogRef = this.dialog.open(CorporateUserEditModalComponent, {
      width: '400px',
      data: {
        index
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var value_parse = {
          user : result
        }
        console.log(JSON.stringify(value_parse));
        //this.updateNewUser(value_parse);
      }
    });
  }

}
