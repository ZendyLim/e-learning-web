import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateSidebarComponent } from './corporate-sidebar.component';
import {CorporateSidebarItemComponent} from "./item/corporate-sidebar-item.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CorporateSidebarComponent, CorporateSidebarItemComponent],
  bootstrap: [CorporateSidebarComponent],
  exports: [CorporateSidebarComponent]
})
export class CorporateSidebarModule { }
