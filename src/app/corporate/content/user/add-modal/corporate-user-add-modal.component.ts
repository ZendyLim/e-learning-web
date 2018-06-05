import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-corporate-user-add-modal',
  templateUrl: './corporate-user-add-modal.component.html',
  styleUrls: ['./corporate-user-add-modal.component.scss']
})
export class CorporateUserAddModalComponent implements OnInit {


  newUserForm : FormGroup = new FormGroup({
    username: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CorporateUserAddModalComponent>) { }

  ngOnInit() {
  }

  submit(){
    this.dialogRef.close(this.newUserForm.value);
  }

}
