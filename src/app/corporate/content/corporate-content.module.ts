import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateContentComponent } from './corporate-content.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CorporateContentComponent,
    children: [
      {
        path: 'corporate',
        loadChildren: './corpuser/corpuser.module#CorpuserModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CorporateContentComponent],
  bootstrap: [CorporateContentComponent]
})
export class CorporateContentModule { }
