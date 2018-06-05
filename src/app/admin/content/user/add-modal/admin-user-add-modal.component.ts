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
    username: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<AdminUserAddModalComponent>) { }

  ngOnInit() {
  }

  submit(){
    this.dialogRef.close(this.newUserForm.value);
  }

}
