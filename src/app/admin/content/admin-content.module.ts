import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContentComponent } from './admin-content.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AdminContentComponent,
    children: [
      { path: '', redirectTo: 'home'},
      {
        path: 'home',
        loadChildren: './home/admin-home.module#AdminHomeModule'
      },
      {
        path: 'corporate',
        loadChildren: './user/admin-user.module#AdminUserModule'
      },
      {
        path: 'analytic',
        loadChildren: './analytic/admin-analytic.module#AdminAnalyticModule'
      },
      {
        path: 'student',
        loadChildren: './student/admin-student.module#AdminStudentModule'
      },
      { path: '**', redirectTo: 'home'},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminContentComponent],
  bootstrap: [AdminContentComponent]
})
export class AdminContentModule { }
