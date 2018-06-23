import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-corporate-user-add-modal',
  templateUrl: './corporate-user-add-modal.component.html',
  styleUrls: ['./corporate-user-add-modal.component.scss']
})
export class CorporateUserAddModalComponent implements OnInit {
  years = [2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050];

  newUserForm : FormGroup = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    company: new FormControl(''),
    department: new FormControl(''),
    password: new FormControl(''),
    joinDate: new FormControl(''),
    birthday: new FormControl(''),
    jlpt: new FormControl(''),
    jlptyear: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CorporateUserAddModalComponent>) { }

  ngOnInit() {
  }

  submit(){
   var date = this.newUserForm.value['joinDate'];
   this.newUserForm.value['joinDate'] = date.getTime() / 1000;
    this.dialogRef.close(this.newUserForm.value);
  }

}
