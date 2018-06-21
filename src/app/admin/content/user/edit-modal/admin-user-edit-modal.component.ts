import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-admin-user-edit-modal',
  templateUrl: './admin-user-edit-modal.component.html',
  styleUrls: ['./admin-user-edit-modal.component.scss']
})
export class AdminUserEditModalComponent implements OnInit {
  user: any[];
  newEditForm : FormGroup = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    status: new FormControl(1),
  });

  constructor(public dialogRef: MatDialogRef<AdminUserEditModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data.index);
   this.user = this.data.index;
  }

  submit(){
    this.newEditForm.value['_id'] = this.user['_id'];
    if(this.newEditForm.value['username'] == ''){
      alert('Please fill email');
    }else{
      if(this.newEditForm.value['name'] == ''){
        alert('please fill name')
      }else{
        this.dialogRef.close(this.newEditForm.value);
      }
    }
  }

}
