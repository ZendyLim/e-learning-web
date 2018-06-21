import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {RouterModule, Routes} from "@angular/router";
import {AdminSidebarModule} from "./sidebar/admin-sidebar.module";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: './content/admin-content.module#AdminContentModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    AdminSidebarModule
  ],
  declarations: [AdminComponent],
  bootstrap: [AdminComponent]
})

export class AdminModule { }
