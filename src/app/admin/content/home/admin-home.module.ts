import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home.component';
import {RouterModule, Routes} from "@angular/router";
import { AdminHomeService } from './admin-home.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [AdminHomeService],
  declarations: [AdminHomeComponent],
  bootstrap: [AdminHomeComponent]
})
export class AdminHomeModule { }
