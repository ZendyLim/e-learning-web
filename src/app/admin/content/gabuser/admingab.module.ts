import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmingabComponent } from './admingab.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AdmingabComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmingabComponent],
  bootstrap: [AdmingabComponent]
})
export class AdmingabModule { }
