import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import { EditModuleComponent } from './edit-modal/edit-module.component';

@Component({
  selector: 'app-corpuser',
  templateUrl: './corpuser.component.html',
  styleUrls: ['./corpuser.component.scss']
})
export class CorpuserComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModalEdit() {
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
