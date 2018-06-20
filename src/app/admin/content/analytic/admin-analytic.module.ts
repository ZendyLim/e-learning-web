import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAnalyticComponent } from './admin-analytic.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AdminAnalyticComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminAnalyticComponent]
})
export class AdminAnalyticModule { }
