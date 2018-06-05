import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContentComponent } from './admin-content.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AdminContentComponent,
    children: [
      {
        path: 'user',
        loadChildren: './user/admin-user.module#AdminUserModule'
      }
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
