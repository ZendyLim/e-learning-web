import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar.component';
import {AdminSidebarItemComponent} from "./item/admin-sidebar-item.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminSidebarComponent, AdminSidebarItemComponent],
  exports: [AdminSidebarComponent]
})
export class AdminSidebarModule { }
