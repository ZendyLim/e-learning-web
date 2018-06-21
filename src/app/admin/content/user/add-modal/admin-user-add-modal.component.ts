import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-admin-user-add-modal',
  templateUrl: './admin-user-add-modal.component.html',
  styleUrls: ['./admin-user-add-modal.component.scss']
})
export class AdminUserAddModalComponent implements OnInit {

  newUserForm : FormGroup = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<AdminUserAddModalComponent>) { }

  ngOnInit() {
  }

  submit(){
    if(this.newUserForm.value['username'] == ''){
      alert('Please fill email');
    }else{
      if(this.newUserForm.value['name'] == ''){
        alert('please fill name')
      }else{
        if(this.newUserForm.value['password'] == ''){
          alert('please fill Password')
        }else{

          this.dialogRef.close(this.newUserForm.value);
        }
      }
    }
    //
  }

}
