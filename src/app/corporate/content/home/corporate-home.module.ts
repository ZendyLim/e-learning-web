import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateHomeComponent } from './corporate-home.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CorporateHomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CorporateHomeComponent],
  bootstrap: [CorporateHomeComponent]
})
export class CorporateHomeModule { }
