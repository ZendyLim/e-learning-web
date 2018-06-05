import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SidebarMenuItemComponent } from './sidebar-menu-item/sidebar-menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [SidebarComponent, SidebarMenuItemComponent],
  exports: [SidebarComponent]
})


export class SidebarModule { }
