import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminStudentComponent } from './admin-student.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AdminStudentComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminStudentComponent]
})
export class AdminStudentModule { }
