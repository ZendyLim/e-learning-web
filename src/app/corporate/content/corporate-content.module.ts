import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateContentComponent } from './corporate-content.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CorporateContentComponent,
    children: [
      { path: '', redirectTo: 'home'},
      {
        path: 'user',
        loadChildren: './user/corporate-user.module#CorporateUserModule'
      },
      {
        path: 'home',
        loadChildren: './home/corporate-home.module#CorporateHomeModule'
      },
      { path: '**', redirectTo: 'home'},
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
