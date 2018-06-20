import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-admin-user-edit-modal',
  templateUrl: './admin-user-edit-modal.component.html',
  styleUrls: ['./admin-user-edit-modal.component.scss']
})
export class AdminUserEditModalComponent implements OnInit {

  newUserForm : FormGroup = new FormGroup({
    username: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<AdminUserEditModalComponent>) { }

  ngOnInit() {
  }

  submit(){
    this.dialogRef.close(this.newUserForm.value);
  }

}
