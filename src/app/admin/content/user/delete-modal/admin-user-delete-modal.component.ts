import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-admin-user-delete-modal',
  templateUrl: './admin-user-delete-modal.component.html',
  styleUrls: ['./admin-user-delete-modal.component.scss']
})
export class AdminUserDeleteModalComponent implements OnInit {

  newUserForm : FormGroup = new FormGroup({
    username: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<AdminUserDeleteModalComponent>) { }

  ngOnInit() {
  }

  submit(){
    this.dialogRef.close(this.newUserForm.value);
  }

}
