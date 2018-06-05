import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from './admin-user.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AdminUserComponent,
    children : [
      {
        path: '',
        loadChildren: './admin-user-index/admin-user-index.module#AdminUserIndexModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminUserComponent],
  bootstrap: [AdminUserComponent]
})
export class AdminUserModule { }
