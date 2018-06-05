import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from "@angular/router";
import {SidebarModule} from "./sidebar/sidebar.module";
import {ContentModule} from "./content/content.module";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule,
    ContentModule
  ],
  declarations: [
    AdminComponent,
  ],
  exports: [AdminComponent]
})

export class AdminModule { }
