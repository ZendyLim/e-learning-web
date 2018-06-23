import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-corporate-user-edit-modal',
  templateUrl: './corporate-user-edit-modal.component.html',
  styleUrls: ['./corporate-user-edit-modal.component.scss']
})
export class CorporateUserEditModalComponent implements OnInit {
  user: any[];
  years = [2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050];

  newEditForm : FormGroup = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    company: new FormControl(''),
    department: new FormControl(''),
    joinDate: new FormControl(''),
    birthday: new FormControl(''),
    jlpt: new FormControl(''),
    jlptYear: new FormControl(''),
    status: new FormControl(1)
  });
 date;
  constructor(public dialogRef: MatDialogRef<CorporateUserEditModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data.index);
   this.user = this.data.index;
    this.date = new Date(this.user["joinDate"] * 1000);
  }

  submit(){
    this.newEditForm.value['_id'] = this.user['_id'];
    if(this.newEditForm.value['username'] == ""){
      alert('please input email');
    }else{
      if(this.newEditForm.value['name'] == ""){
        alert('please input name');
      }else{
        if(this.newEditForm.value['company'] == ""){
          alert('please input company');
        }else{
          if(this.newEditForm.value['department'] == ""){
            alert('please input department');
          }else{
            if(this.newEditForm.value['joinDate'] == ""){
              alert('please pick join date');
            }else{
              if(this.newEditForm.value['jlptYear'] == ""){
              alert('please input jlpt year');
              }else{
              if(this.newEditForm.value['jlpt'] == ""){
                alert('please input jlpt batch');
              }else{
                if(this.newEditForm.value['status'] == ""){
                  alert('please select status');
                }else{
                    var date = this.newEditForm.value['joinDate'];
                  var dataparse = this.newEditForm.value;
                  dataparse['joinDate'] = (date.getTime() / 1000);
                  this.dialogRef.close(dataparse);        
                  }
                }  
              }  
            }
          }
        }
      }
    }

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
