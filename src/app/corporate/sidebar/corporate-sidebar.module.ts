import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateSidebarComponent } from './corporate-sidebar.component';
import {CorporateSidebarItemComponent} from "./item/corporate-sidebar-item.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CorporateSidebarComponent, CorporateSidebarItemComponent],
  exports: [CorporateSidebarComponent]
})
export class CorporateSidebarModule { }
