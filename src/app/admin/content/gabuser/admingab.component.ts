import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import { EditModuleComponent } from './edit-modal/edit-module.component';

@Component({
  selector: 'app-admingab',
  templateUrl: './admingab.component.html',
  styleUrls: ['./admingab.component.scss']
})
export class AdmingabComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModalEdit() {
  console.log("asdas");
  	let dialogRef = this.dialog.open(EditModuleComponent, {
      width: '80%',
      data: {}
    });
  }

  clickMethod(name: string) {
  if(confirm("Are you sure to delete "+name)) {
    console.log("Implement delete functionality here");
  }
}

}
