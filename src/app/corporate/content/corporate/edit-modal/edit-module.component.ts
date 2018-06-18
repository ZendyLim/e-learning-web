import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.scss']
})
export class EditModuleComponent implements OnInit {

	newUserForm : FormGroup = new FormGroup({
	   username: new FormControl('')
	 });

  constructor(public dialogRef: MatDialogRef<EditModuleComponent>) { }

  ngOnInit() {
  }

  submit() {
  	console.log("asd");
  }

}
