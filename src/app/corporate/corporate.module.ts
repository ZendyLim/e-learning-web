import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateComponent } from './corporate.component';
import {RouterModule, Routes} from "@angular/router";
import {CorporateSidebarModule} from "./sidebar/corporate-sidebar.module";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes: Routes = [
  {
    path: '',
    component: CorporateComponent,
    children: [
      {
        path: '',
        loadChildren: ''
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    CorporateSidebarModule
  ],
  declarations: [CorporateComponent],
  bootstrap: [CorporateComponent]
})
export class CorporateModule { }
