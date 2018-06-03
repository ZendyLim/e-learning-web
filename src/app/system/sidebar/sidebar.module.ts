import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {RouterModule, Routes} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import { SidebarMenuItemComponent } from './sidebar-menu-item/sidebar-menu-item.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SidebarComponent, SidebarMenuItemComponent],
  bootstrap: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule { }
