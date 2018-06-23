import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateHomeComponent } from './corporate-home.component';
import { CorporateHomeService } from './corporate-home.service';
import {RouterModule, Routes} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: CorporateHomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [CorporateHomeService],  
  declarations: [CorporateHomeComponent],
  bootstrap: [CorporateHomeComponent]
})
export class CorporateHomeModule { }
