import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateDetailComponent } from './corporate-detail.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CorporateDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CorporateDetailComponent],
  bootstrap: [CorporateDetailComponent]
})
export class CorporateDetailModule { }
