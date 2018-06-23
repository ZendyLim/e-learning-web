import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateAnalyticComponent } from './corporate-analytic.component';
import {RouterModule, Routes} from "@angular/router";

import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: CorporateAnalyticComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CorporateAnalyticComponent],
  bootstrap: [CorporateAnalyticComponent]
})
export class CorporateAnalyticModule { }
