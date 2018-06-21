import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar.component';
import {AdminSidebarItemComponent} from "./item/admin-sidebar-item.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AdminSidebarComponent, AdminSidebarItemComponent],
  exports: [AdminSidebarComponent]
})
export class AdminSidebarModule { }
