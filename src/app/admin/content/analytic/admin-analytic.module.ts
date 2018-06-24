import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAnalyticComponent } from './admin-analytic.component';
import {RouterModule, Routes} from "@angular/router";
import { AdminAnalyticService } from './admin-analytic.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: AdminAnalyticComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [AdminAnalyticService],
  declarations: [AdminAnalyticComponent]
})
export class AdminAnalyticModule { }
