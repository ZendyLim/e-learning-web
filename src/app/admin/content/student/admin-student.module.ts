import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminStudentComponent } from './admin-student.component';
import {AdminHomeService} from "../home/admin-home.service";
import {RouterModule, Routes} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: AdminStudentComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [AdminHomeService],
  declarations: [AdminStudentComponent]
})
export class AdminStudentModule { }
