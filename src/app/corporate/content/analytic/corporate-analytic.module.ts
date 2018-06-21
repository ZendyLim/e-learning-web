import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateAnalyticComponent } from './corporate-analytic.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CorporateAnalyticComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CorporateAnalyticComponent],
  bootstrap: [CorporateAnalyticComponent]
})
export class CorporateAnalyticModule { }
